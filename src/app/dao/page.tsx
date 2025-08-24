"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DAOPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - Adjusted for better centering */}
      <main className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-20"> {/* Subtract navbar height and add vertical padding */}
        {/* Hero Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="font-extralight drop-shadow-[0_0_0.3rem_#ffffff70]">
                Epicentral<strong>DAO</strong>
              </span>
            </h1>
            <p className="text-xl text-white/70">
              Transparent | Decentralized | Community-driven.
            </p>
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 transition-all duration-300 hover:scale-95"
                  onClick={() => window.open('https://app.realms.today/dao/LABS', '_blank')}
                >
                  Join DAO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {/* Add Cabana Exchange Button */}
                <Button 
                  size="lg" 
                  variant="outline"
                  className="transition-all duration-300 hover:scale-95 flex items-center"
                  onClick={() => window.open('https://cabana.exchange/?partner=Epicentral', '_blank')}
                >
                  <Image 
                    src="/cabana_logo.png" 
                    alt="Cabana Exchange" 
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Trade on Cabana
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="transition-all duration-300"
                  onClick={() => {
                    document.getElementById('dao-intro')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }}
                >
                  What&apos;s a DAO?
                </Button>
              </div>

              {/* Gradient Divider */}
              <div className="relative w-[320px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* New "How does it work?" button */}
              <Button 
                size="sm"
                variant="ghost" 
                className="text-white/50 hover:text-white/70 transition-all duration-300"
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
              >
                How does it work?
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Add id to the divider for scrolling */}
      <div id="dao-intro" className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"></div> 

      {/* DAO Introduction Section - Consolidated */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12">
            <div className="space-y-12">
              {/* What is a DAO? */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a85ff]/20 to-[#4a85ff]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-light text-white/90">
                    What is a DAO?
                  </h2>
                </div>
                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-white/10 hover:border-[#4a85ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
                  <div className="space-y-4">
                    <p className="text-xl font-medium text-[#4a85ff]">
                      "Decentralized Autonomous Organization"
                    </p>
                    <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                      A DAO is an organization that lives on the blockchain, governed by smart contracts and community consensus rather than traditional hierarchical structures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gradient Divider */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* What is a DAO used for? */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a85ff]/20 to-[#4a85ff]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-light text-white/90">
                    What is a DAO used for?
                  </h2>
                </div>
                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-white/10 hover:border-[#4a85ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        <strong className="text-white/90">Financial and Operational Decisions</strong> - DAOs operate similarly to corporations but with enhanced transparency and community involvement.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        <strong className="text-white/90">Treasury Management</strong> - EpicentralDAO is unique in that <span className="text-[#4a85ff]">anyone can propose what to do with the treasury</span>.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        <strong className="text-white/90">Governance Rights</strong> - As a $LABS Token holder, you can vote on proposals, transfer funds, and update protocol parameters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient Divider */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* Why is EpicentralDAO needed? */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a85ff]/20 to-[#4a85ff]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-light text-white/90">
                    Why is EpicentralDAO needed?
                  </h2>
                </div>
                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-white/10 hover:border-[#4a85ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        <strong className="text-white/90">Transparency</strong> - Building trust through open and verifiable operations on the blockchain.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        <strong className="text-white/90">Community Governance</strong> - Ensuring the protocol operates in the best interest of $LABS token holders and the Solana Ecosystem.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        <strong className="text-white/90">Decentralized Operations</strong> - The <span className="text-[#4a85ff]">Core Team</span> handles day-to-day operations while token holders make key decisions through proposals and voting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-white/90 mb-16 text-center drop-shadow-[0_0_0.3rem_#ffffff70]">
            How does the DAO work?
          </h2>
          
          <div className="relative flex flex-col items-center space-y-8">
            {/* Card 1 */}
            <div className="relative z-30 w-full max-w-lg bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300 hover:border-[#4a85ff]/30 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center">
                  <span className="text-[#4a85ff] text-lg font-medium">1</span>
                </div>
                <h3 className="text-xl font-medium text-white/90">Draft Proposal</h3>
              </div>
              <p className="text-base text-white/70">
                Any member with <u>250,000 $LABS</u> can create a proposal either in <a href="https://app.realms.today/dao/LABS" className="text-[#4a85ff] hover:text-[#4a85ff] hover:drop-shadow-[0_0_0.3rem_#4a85ff] transition-all duration-300">Realms</a> or in the Epicentral Labs <a href="https://discord.gg/5asAuY2sR8" className="text-[#4a85ff] hover:text-[#4a85ff] hover:drop-shadow-[0_0_0.3rem_#4a85ff] transition-all duration-300">Discord</a>.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative z-20 w-full max-w-lg bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300 hover:border-[#4a85ff]/30 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center">
                  <span className="text-[#4a85ff] text-lg font-medium">2</span>
                </div>
                <h3 className="text-xl font-medium text-white/90">Community Feedback</h3>
              </div>
              <p className="text-base text-white/70">
                Whether created in Realms or Discord, the community will then discuss the proposal and provide feedback in designated channels.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative z-10 w-full max-w-lg bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300 hover:border-[#4a85ff]/30 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center">
                  <span className="text-[#4a85ff] text-lg font-medium">3</span>
                </div>
                <h3 className="text-xl font-medium text-white/90">Voting Period</h3>
              </div>
              <p className="text-base text-white/70">
                Holders that staked into the EpicentralDAO, use their $LABS to vote on live proposals -- with voting power proportional to their holdings.
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative w-full max-w-lg bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300 hover:border-[#4a85ff]/30 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center">
                  <span className="text-[#4a85ff] text-lg font-medium">4</span>
                </div>
                <h3 className="text-xl font-medium text-white/90">Implementation</h3>
              </div>
              <p className="text-base text-white/70">
                After the voting period (1-3 days), if a proposal is approved by the public, it is then implemented by the Core Team or automatically via an executable on-chain instruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Bonuses Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12">
            <div className="space-y-12">
              {/* What are Contribution Bonuses? */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a85ff]/20 to-[#4a85ff]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-light text-white/90">
                    Contribution Bonuses
                  </h2>
                </div>
                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-white/10 hover:border-[#4a85ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
                  <div className="space-y-4">
                    <p className="text-xl font-medium text-[#4a85ff]">
                      Rewarding Community Contributors
                    </p>
                    <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                      EpicentralDAO recognizes and rewards community members who actively contribute to the ecosystem through development, content creation, community management, and other valuable services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gradient Divider */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* How to Become a Contributor */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a85ff]/20 to-[#4a85ff]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-light text-white/90">
                    How to Become a Contributor
                  </h2>
                </div>
                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-white/10 hover:border-[#4a85ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        <strong className="text-white/90">Join the Community</strong> - Start by engaging with the Epicentral Labs community on <a href="https://discord.gg/5asAuY2sR8" className="text-[#4a85ff] hover:text-[#4a85ff] hover:drop-shadow-[0_0_0.3rem_#4a85ff] transition-all duration-300">Discord</a> and participating in discussions.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V21a1 1 0 01-1 1H11a1 1 0 01-1-1v-2.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        <strong className="text-white/90">Identify Opportunities</strong> - Look for areas where you can contribute, whether it's <span className="text-[#4a85ff]">development</span>, <span className="text-[#4a85ff]">content creation</span>, <span className="text-[#4a85ff]">community support</span>, or <span className="text-[#4a85ff]">marketing</span>.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        <strong className="text-white/90">Resolve Issues</strong> - Resolve issues and bugs within the <a href="https://github.com/EpicentralLabs" className="text-[#4a85ff] hover:text-[#4a85ff] hover:drop-shadow-[0_0_0.3rem_#4a85ff] transition-all duration-300">Epicentral Labs GitHub Repositories</a>.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        <strong className="text-white/90">Get Rewarded</strong> - Upon successful completion and community approval, receive your contribution bonus in $LABS tokens directly from the DAO treasury.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Call to Action Container */}
          <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-white/90">
                Ready to Join?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Become a part of the Epicentral DAO and help shape the future of DeFi on Solana. Start by acquiring $LABS tokens and joining our community.
              </p>
              <div className="flex items-center justify-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      size="lg"
                      className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                                 hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95"
                    >
                      Get $LABS
                      <ChevronDown className="ml-2 h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black/80 backdrop-blur-md border border-white/10 text-white">
                    <DropdownMenuItem 
                      className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer flex items-center"
                      onClick={() => window.open('https://jup.ag/swap/SOL-LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR', '_blank')}
                    >
                      <Image 
                        src="/jupiter_logo.png" 
                        alt="Jupiter" 
                        width={20}
                        height={20}
                        className="mr-2 rounded-full"
                      />
                      Jupiter
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer flex items-center"
                      onClick={() => window.open('https://cabana.exchange/?partner=Epicentral', '_blank')}
                    >
                      <Image 
                        src="/cabana_logo.png" 
                        alt="Cabana Exchange" 
                        width={16}
                        height={16}
                        className="mr-2 rounded-full"
                      />
                      Cabana Exchange
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer flex items-center"
                      onClick={() => window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR', '_blank')}
                    >
                      <Image 
                        src="/raydium_logo.jpg" 
                        alt="Raydium" 
                        width={20}
                        height={20}
                        className="mr-2 rounded-full"
                      />
                      Raydium
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button 
                  size="lg"
                  className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                             hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95"
                  onClick={() => window.open('https://app.realms.today/dao/LABS', '_blank')}
                >
                  Join DAO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 