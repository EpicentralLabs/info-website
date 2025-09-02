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
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70] text-white">Fundraising Campaign</span>
                <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70] text-[#4a85ff] ml-3">Participants</span>
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              </p>
              {/* Key Benefits */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Revenue Share</h3>
                    <p className="text-white/80 mb-4">
                      Earn <span className="text-[#4a85ff] font-bold text-xl">10%</span> of all OPX fees for 2 months post-launch*
                    </p>
                    <p className="text-xs text-white/60">
                      * Must hold $LABS tokens until Sept 30, 2025 <br />
                      * OPX launch date is TBD
                    </p>
                  </div>
                  
                  <div className="bg-black/30 rounded-xl p-4">
                    <p className="text-xs text-white/60 mb-2">Treasury Wallet</p>
                    <p className="font-mono text-sm text-[#4a85ff] break-all">
                      <a 
                        href="https://v2.realms.today/dao/5PP7vKjJyLw1MR55LoexRsCj3CpZj9MdD6aNXRrvxG42/proposals" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-[#4a85ff] transition-colors"
                      >
                        3BEvopNQ89zkM4r6ADva18i5fao1sqR1pmswyQyfj838
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Summary Stats */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-[#4a85ff]">
                    {participantsData.length}
                  </div>
                  <div className="text-sm text-white/70">Unique Buyers</div>
                </div>
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-[#4a85ff]">
                    {formatNumber(participantsData.reduce((sum, entry) => sum + entry.labsQuantity, 0))}
                  </div>
                  <div className="text-sm text-white/70">Total $LABS Bought</div>
                </div>
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-[#4a85ff]">
                    $10,000
                  </div>
                  <div className="text-sm text-white/70">USDC</div>
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 lg:p-8 
                            hover:border-white/20 transition-all duration-500
                            shadow-[0_0_15px_rgba(0,0,0,0.2)]">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-2 md:mb-6 drop-shadow-[0_0_0.3rem_#ffffff70]
                             text-center">
                Top 100 Participants
              </h2>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-4 px-2 text-white/80 font-medium">Wallet Address</th>
                        <th className="text-right py-4 px-2 text-white/80 font-medium">$LABS Quantity</th>
                        <th className="text-right py-4 px-2 text-white/80 font-medium">% Allocation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {participantsData.slice(0, 100).map((entry) => (
                        <tr 
                          key={entry.walletAddress} 
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-4 px-2">
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
                          <td className="py-4 px-2 text-right">
                            <div className="font-semibold text-[#4a85ff]">
                              {formatNumber(entry.labsQuantity)}
                            </div>
                          </td>
                          <td className="py-4 px-2 text-right">
                            <div className="text-white/80">
                              {formatPercentage(entry.percentageAllocation)}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                  {participantsData.slice(0, 20).map((entry) => (
                    <div 
                      key={entry.walletAddress}
                      className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-4 border border-white/10"
                    >
                      <div className="mb-3">
                        <a 
                          href={`https://solscan.io/account/${entry.walletAddress}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-white/90 hover:text-white/70 transition-colors duration-300 text-sm inline-flex items-center gap-1"
                        >
                          {formatWalletAddress(entry.walletAddress)}
                          <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-white/60">$LABS Quantity</div>
                          <div className="font-semibold text-[#4a85ff]">
                            {formatNumber(entry.labsQuantity)}
                          </div>
                        </div>
                        <div>
                          <div className="text-white/60">% Allocation</div>
                          <div className="text-white/80">
                            {formatPercentage(entry.percentageAllocation)}
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
