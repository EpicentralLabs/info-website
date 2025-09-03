"use client"

import { useState, useEffect } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { FundingParticipantEntry } from '@/types/fundingParticipants';
import { fetchAllFundingRoundData } from '@/utils/api/useFetchFundingParticipantsData';

export default function FundingParticipantsPage() {
  const [participantsData, setParticipantsData] = useState<FundingParticipantEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadParticipantsData = async () => {
      try {
        setLoading(true);
        const data = await fetchAllFundingRoundData();
        setParticipantsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load funding participants data');
      } finally {
        setLoading(false);
      }
    };

    // Only load data in the browser, not during SSR/build
    if (typeof window !== 'undefined') {
      loadParticipantsData();
    } else {
      setLoading(false);
    }
  }, []);

  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatPercentage = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      style: 'percent'
    }).format(num / 100);
  };



  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center min-h-[80vh] pt-48">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4a85ff] mx-auto"></div>
            <p className="text-white/70">Loading fundraiser participants data...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center min-h-[80vh] pt-48">
          <div className="text-center space-y-4">
            <p className="text-red-400">Error: {error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#4a85ff] text-white rounded-lg hover:bg-[#4a85ff]/80 transition-colors"
            >
              Try Again
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70] text-white">Fundraising Campaign</span>
                <br className="sm:hidden" />
                <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70] text-[#4a85ff] sm:ml-3">Participants</span>
              </h1>
              
              {/* Revenue Share & Stats Combined */}
              <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-8 max-w-6xl mx-auto mb-12 hover:border-white/20 transition-all duration-500 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {/* Revenue Share Info - Left Side */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">OPX Revenue Share Incentive:</h3>
                    <p className="text-base md:text-lg text-white/80 mb-4">
                      Fundraiser participants become eligible to receive <span className="text-[#4a85ff] font-bold text-lg md:text-lg">10%</span> of all <strong>OPX</strong> fees for 2 months post-launch*
                    </p>
                    <p className="text-xs text-white/60">
                      * Must hold $LABS tokens until Sept 30, 2025 <br />
                      * OPX launch date is TBD
                    </p>
                  </div>
                  
                  {/* Stats Grid - Right Side */}
                  <div className="flex-shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-3">
                      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-4 border border-white/10 text-center min-w-[140px]">
                        <div className="text-lg md:text-xl font-bold text-[#4a85ff]">
                          {participantsData.length}
                        </div>
                        <div className="text-xs text-white/70">Unique Buyers</div>
                      </div>
                      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-4 border border-white/10 text-center min-w-[140px]">
                        <div className="text-lg md:text-xl font-bold text-[#4a85ff]">
                          {formatNumber(participantsData.reduce((sum, entry) => sum + entry.labsQuantity, 0))}
                        </div>
                        <div className="text-xs text-white/70">Total $LABS Bought</div>
                      </div>
                      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-4 border border-white/10 text-center min-w-[140px]">
                        <div className="text-lg md:text-xl font-bold text-[#4a85ff]">
                          $10,000
                        </div>
                        <div className="text-xs text-white/70">USDC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Divider */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
            </div>

            {/* Leaderboard Table */}
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 lg:p-8 
                            hover:border-white/20 transition-all duration-500 shadow-lg">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-2 md:mb-6 drop-shadow-[0_0_0.3rem_#ffffff70]
                             text-center">
                Top 100 Participants
              </h2>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full table-fixed">
                    <colgroup>
                      <col className="w-[30%]" />
                      <col className="w-[25%]" />
                      <col className="w-[22.5%]" />
                      <col className="w-[22.5%]" />
                    </colgroup>
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-4 px-4 text-white/80 font-medium">
                          <div className="flex items-center gap-2">
                            Wallet Address
                            <div className="relative group">
                              <svg className="w-4 h-4 text-white/40 hover:text-white/70 transition-colors cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <div className="absolute left-1/2 -translate-x-1/2 top-6 z-20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                                <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-lg">
                                  <p className="text-xs text-white/90">Solana wallet address of the participant</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th className="text-right py-4 px-4 text-white/80 font-medium">
                          <div className="flex items-center justify-end gap-2">
                            $LABS Quantity
                            <div className="relative group">
                              <svg className="w-4 h-4 text-white/40 hover:text-white/70 transition-colors cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <div className="absolute right-0 top-6 z-20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                                <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-lg">
                                  <p className="text-xs text-white/90">Amount of $LABS tokens purchased</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th className="text-right py-4 px-4 text-white/80 font-medium">
                          <div className="flex items-center justify-end gap-2">
                            % Contributed
                            <div className="relative group">
                              <svg className="w-4 h-4 text-white/40 hover:text-white/70 transition-colors cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <div className="absolute right-0 top-6 z-20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                                <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-lg">
                                  <p className="text-xs text-white/90">Percentage of total fundraising contribution</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th className="text-right py-4 px-4 text-white/80 font-medium">
                          <div className="flex items-center justify-end gap-2">
                            % Revenue Allocation
                            <div className="relative group">
                              <svg className="w-4 h-4 text-white/40 hover:text-white/70 transition-colors cursor-help" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <div className="absolute right-0 top-6 z-20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                                <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-lg">
                                  <p className="text-xs text-white/90">Share of the 10% OPX revenue for 2 months</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {participantsData.slice(0, 100).map((entry) => (
                        <tr 
                          key={entry.walletAddress} 
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-4 px-4">
                            <a 
                              href={`https://solscan.io/account/${entry.walletAddress}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-white/90 hover:text-white/70 transition-colors duration-300 inline-flex items-center gap-1"
                            >
                              {formatWalletAddress(entry.walletAddress)}
                              <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="font-semibold text-[#4a85ff]">
                              {formatNumber(entry.labsQuantity)}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="text-white/80">
                              {formatPercentage(entry.percentageAllocation)}
                            </div>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="text-green-400 font-semibold">
                              {formatPercentage(entry.percentageAllocation * 0.1)}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-3">
                  {participantsData.slice(0, 50).map((entry) => (
                    <div 
                      key={entry.walletAddress}
                      className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-4 border border-white/10"
                    >
                      <div className="mb-4">
                        <a 
                          href={`https://solscan.io/account/${entry.walletAddress}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-white/90 hover:text-white/70 transition-colors duration-300 text-base inline-flex items-center gap-2"
                        >
                          {formatWalletAddress(entry.walletAddress)}
                          <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                      <div className="grid grid-cols-1 gap-3 text-sm">
                        <div className="flex justify-between items-center">
                          <div className="text-white/60">$LABS Quantity</div>
                          <div className="font-semibold text-[#4a85ff] text-base">
                            {formatNumber(entry.labsQuantity)}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-white/60">% Contributed</div>
                          <div className="text-white/80 text-base">
                            {formatPercentage(entry.percentageAllocation)}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-white/60">Revenue Share</div>
                          <div className="text-green-400 font-semibold text-base">
                            {formatPercentage(entry.percentageAllocation * 0.1)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {participantsData.length > 100 && (
                  <div className="mt-6 text-center text-white/60 text-sm">
                    Showing top 100 participants out of {participantsData.length} total unique buyers
                  </div>
                )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
