import { FundingParticipantEntry } from '@/types/fundingParticipants';

/**
 * Static funding participants data from FRC-Snapshot-10-02-2025-19-30-PM-EST.csv
 * This replaces the dynamic API data with fixed snapshot data
 */
export const staticFundingParticipants: FundingParticipantEntry[] = [
  {
    walletAddress: "FPN8XSRKtuG8sRnzAfYzdTAcewXvihnh8rR5KuRVHMxk",
    labsQuantity: 1014264,
    percentageAllocation: 25.707,
    totalPurchases: 1, // Default value since not in CSV
    lastPurchaseSlot: 0, // Default value since not in CSV
    usdcAmount: 1014264 * 0.01, // Assuming $0.01 per LABS token
    averagePrice: 0.01 // Assuming $0.01 per LABS token
  },
  {
    walletAddress: "GxEmQ2XcxsismsX4s4jbiEubuBtqax67Pa8g25AgGXwN",
    labsQuantity: 609630,
    percentageAllocation: 15.451,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 609630 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "D5B6PQycZLkrApdjrKjqEeBDZDXTJJUvnGJ64qkHP6eV",
    labsQuantity: 528809,
    percentageAllocation: 13.403,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 528809 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "AvHNzGNJKCDLmMCnQJk8oUzz4fnmjM276nUtEAuzSMPB",
    labsQuantity: 479176,
    percentageAllocation: 12.145,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 479176 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "3zxtSkehQA7Dtknwkt95FMnp4h4MDWYHM1epj9xeRsof",
    labsQuantity: 281807,
    percentageAllocation: 7.142,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 281807 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "HejWAp9fEFmYSSQSFXU7MM3HXtGZetcrfTNXf7ymrJaC",
    labsQuantity: 238511,
    percentageAllocation: 6.045,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 238511 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "AqMPDhyaAHskQTfribZFT2V64hAWa2mRu1H7u43xRwFj",
    labsQuantity: 145635,
    percentageAllocation: 3.691,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 145635 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "DBAMcasPmgSrStwH82DhVSKaWZrsjUR3nz6M3vc13aCs",
    labsQuantity: 127978,
    percentageAllocation: 3.244,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 127978 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "AKchXUd79Zg5AEo7kmTA2w39K2NrB7rTjxmQVEvXzv3w",
    labsQuantity: 112078,
    percentageAllocation: 2.841,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 112078 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "FZjBjCsGbctcCbzxJdk85fR38G7cd8cEqYbQ5muvkZsC",
    labsQuantity: 108221,
    percentageAllocation: 2.743,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 108221 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "HNymuYuTyYzGGAHs8YVebEfTsuVd866UHccparwiBzA8",
    labsQuantity: 105697,
    percentageAllocation: 2.679,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 105697 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "E3cezTAbXVRHmcrGHmLiFVdXtxq9Ywpq5ujzkV7aBEwR",
    labsQuantity: 99477,
    percentageAllocation: 2.521,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 99477 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "2kVip1UDmGfG7wobgQmw5sQ84bfgtaHSAtWDWCfwrUGL",
    labsQuantity: 47818,
    percentageAllocation: 1.212,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 47818 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "H7q8zE2gXsWqraa6UCCLCk31zpFwjigMxBfxNDz3gW6c",
    labsQuantity: 46086,
    percentageAllocation: 1.168,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 46086 * 0.01,
    averagePrice: 0.01
  },
  {
    walletAddress: "3cJDqUPRUrDaRBr98FphgUMPt3R5Rfu7S64KPVuzLqhQ",
    labsQuantity: 352,
    percentageAllocation: 0.009,
    totalPurchases: 1,
    lastPurchaseSlot: 0,
    usdcAmount: 352 * 0.01,
    averagePrice: 0.01
  }
];

/**
 * Calculate total USDC raised from static participant data
 */
export const calculateStaticTotalUsdcRaised = (): number => {
  return 20000;
};
