import { ApiResponse, ApiFillData, FundingParticipantEntry } from '@/types/fundingParticipants';

const API_BASE_URL = 'https://mfx-stats-mainnet.fly.dev';
const MARKET_ID = 'B5DoSf56Xa1c83PxKhQiU74fau1UBQNMpGdJgybHhodr';
const TREASURY_WALLET = '3BEvopNQ89zkM4r6ADva18i5fao1sqR1pmswyQyfj838';

/**
 * Fetches funding round data from the API
 */
export const fetchFundingRoundData = async (limit = 1000, offset = 0): Promise<ApiResponse> => {
  try {
    const url = `${API_BASE_URL}/completeFills?market=${MARKET_ID}&limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch funding data: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching funding round data:', error);
    throw error;
  }
};

/**
 * Process API data to create funding participant entries
 * Only count transactions where the treasury wallet is the maker (seller)
 * Uses originalSigner for end-user attribution to avoid counting aggregators
 */
export const processFundingParticipantsData = (fills: ApiFillData[]): FundingParticipantEntry[] => {
  const walletData = new Map<string, {
    totalLabsQuantity: number;
    totalPurchases: number;
    lastPurchaseSlot: number;
    totalUsdcSpent: number;
    totalWeightedPrice: number;
  }>();

  // Filter and process only transactions where treasury wallet is the maker
  const treasuryFills = fills.filter(fill => fill.maker === TREASURY_WALLET);

  treasuryFills.forEach((fill) => {
    // When treasury is maker and takerIsBuy = true, the taker is buying from treasury
    // When treasury is maker and takerIsBuy = false, the taker is selling to treasury
    // We only want to count buyers (takerIsBuy = true)
    if (fill.takerIsBuy) {
      // Use originalSigner when available to attribute to end-user instead of aggregator
      const buyerWallet = fill.originalSigner || fill.taker;
      
      // Skip treasury wallet to avoid self-attribution
      if (buyerWallet === TREASURY_WALLET) {
        return;
      }
      
      const labsQuantity = parseInt(fill.baseAtoms) / 1e9; // Convert from atoms to tokens (assuming 9 decimals)
      const usdcAmount = parseInt(fill.quoteAtoms) / 1e6; // Convert from atoms to USDC (6 decimals)
      const pricePerToken = fill.priceAtoms; // Price is already in USDC per LABS token
      
      const existing = walletData.get(buyerWallet) || {
        totalLabsQuantity: 0,
        totalPurchases: 0,
        lastPurchaseSlot: 0,
        totalUsdcSpent: 0,
        totalWeightedPrice: 0
      };
      
      walletData.set(buyerWallet, {
        totalLabsQuantity: existing.totalLabsQuantity + labsQuantity,
        totalPurchases: existing.totalPurchases + 1,
        lastPurchaseSlot: Math.max(existing.lastPurchaseSlot, fill.slot),
        totalUsdcSpent: existing.totalUsdcSpent + usdcAmount,
        totalWeightedPrice: existing.totalWeightedPrice + (pricePerToken * labsQuantity)
      });
    }
  });

  // Calculate total LABS tokens purchased from treasury
  const totalLabsTokens = Array.from(walletData.values())
    .reduce((sum, data) => sum + data.totalLabsQuantity, 0);

  // Calculate total USDC raised
  const totalUsdcRaised = Array.from(walletData.values())
    .reduce((sum, data) => sum + data.totalUsdcSpent, 0);

  // Convert to funding participant entries with percentage calculations
  // Keep percentageAllocation as unrounded raw value
  const participantEntries: FundingParticipantEntry[] = Array.from(walletData.entries())
    .map(([wallet, data]) => ({
      walletAddress: wallet,
      labsQuantity: data.totalLabsQuantity,
      percentageAllocation: totalLabsTokens > 0 ? (data.totalLabsQuantity / totalLabsTokens) * 100 : 0,
      totalPurchases: data.totalPurchases,
      lastPurchaseSlot: data.lastPurchaseSlot,
      usdcAmount: data.totalUsdcSpent,
      averagePrice: data.totalLabsQuantity > 0 ? data.totalWeightedPrice / data.totalLabsQuantity : 0
    }))
    .sort((a, b) => b.labsQuantity - a.labsQuantity); // Sort by quantity descending

  return participantEntries;
};

/**
 * Calculate total USDC raised from participant entries
 */
export const calculateTotalUsdcRaised = (participants: FundingParticipantEntry[]): number => {
  return participants.reduce((sum, participant) => sum + participant.usdcAmount, 0);
};

/**
 * Fetch all funding round data (handles pagination)
 */
export const fetchAllFundingRoundData = async (): Promise<FundingParticipantEntry[]> => {
  let allFills: ApiFillData[] = [];
  let offset = 0;
  const limit = 1000;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await fetchFundingRoundData(limit, offset);
      allFills = [...allFills, ...response.fills];
      hasMore = response.hasMore;
      offset += limit;
      
      // Safety break to prevent infinite loops
      if (offset > 10000) {
        console.warn('Reached maximum offset limit');
        break;
      }
    }

    return processFundingParticipantsData(allFills);
  } catch (error) {
    console.error('Error fetching all funding round data:', error);
    throw error;
  }
};
