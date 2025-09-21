export interface FundingParticipantEntry {
  walletAddress: string;
  labsQuantity: number;
  percentageAllocation: number;
  totalPurchases: number;
  lastPurchaseSlot: number;
  usdcAmount: number;
  averagePrice: number;
}

export interface ApiFillData {
  slot: number;
  maker: string;
  taker: string;
  market: string;
  baseAtoms: string;
  signature: string;
  priceAtoms: number;
  quoteAtoms: string;
  takerIsBuy: boolean;
  isMakerGlobal: boolean;
  originalSigner: string;
  makerSequenceNumber: string;
  takerSequenceNumber: string;
  aggregator?: string;
}

export interface ApiResponse {
  fills: ApiFillData[];
  total: number;
  hasMore: boolean;
}
