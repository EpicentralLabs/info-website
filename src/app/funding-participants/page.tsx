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
      maximumFractionDigits: 2,
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
            <p className="text-white/70">Loading funding participants data...</p>
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
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70]">
                  Funding Participants
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Buyers who purchased $LABS tokens directly from our treasury wallet
              </p>
              
                            {/* Benefits Banner */}
              <div className="mt-6 p-4 bg-gradient-to-br from-[#4a85ff]/20 to-[#4a85ff]/10 rounded-xl border border-[#4a85ff]/30 max-w-3xl mx-auto">
                <p className="text-white/90 text-center">
                  <strong>The wallets below qualify to earn 10% of all OPX fees</strong> for 2 months post-launch! Revenue distributed proportionally to all buyers. 
                  <span className="text-sm block mt-2 text-white/70">
                    Terms: Buyers must hold their purchased $LABS tokens until Sept 30, 2025 to qualify.
                  </span>
                </p>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border border-white/10 max-w-2xl mx-auto">
                <p className="text-sm text-white/60">
                  <span className="text-[#4a85ff] font-mono">Treasury Wallet:</span> 3BEvopNQ89zkM4r6ADva18i5fao1sqR1pmswyQyfj838
                </p>
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
              </div>
            </div>

            {/* Gradient Divider */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
            </div>

            {/* Leaderboard Table */}
            <Card className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white/90 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4a85ff]/20 to-[#4a85ff]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  Top Buyers from Treasury
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
                      {participantsData.slice(0, 50).map((entry) => (
                        <tr 
                          key={entry.walletAddress} 
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-4 px-2">
                            <div className="font-mono text-white/90">
                              {formatWalletAddress(entry.walletAddress)}
                            </div>
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
                        <div className="font-mono text-white/90 text-sm">
                          {formatWalletAddress(entry.walletAddress)}
                        </div>
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

                {participantsData.length > 50 && (
                  <div className="mt-6 text-center text-white/60 text-sm">
                    Showing top 50 buyers out of {participantsData.length} total unique buyers
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
