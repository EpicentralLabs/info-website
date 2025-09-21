/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  const heroTexts = [
    "Bringing Options Trading to Solana",
    "Shaping DeFi Through Governance",
    "Expanding DeFi Derivatives"
  ];

  useEffect(() => {
    // Initial fade in
    setIsVisible(true);

    const interval = setInterval(() => {
      setIsVisible(false);
      
      // Wait for fade out animation to complete before changing text
      timeoutRef.current = window.setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
        setIsVisible(true);
      }, 1000);
    }, 8000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center min-h-[80vh] pt-48">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="max-w-6xl w-full text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span 
                className={`font-extralight drop-shadow-[0_0_0.3rem_#ffffff70] transition-all duration-500 ${
                  isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
                }`}
              >
                {heroTexts[currentTextIndex]}
              </span>
            </h1>

            {/* Gradient Divider */}
            <div className="relative mt-16 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
            </div>

            {/* Buttons Section */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 transition-all duration-300 
                               hover:scale-95"
                  >
                    Get $LABS
                    <ChevronDown className="ml-2 h-4 w-4" />
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
                variant="outline" 
                className="transition-all duration-300"
                onClick={() => document.getElementById('epicentral-labs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            
            {/* Partners Section */}
            <div className="mt-16 w-full">
              <div className="max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-3 gap-4 md:gap-6 place-items-center">
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://jup.ag/swap/SOL-LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/1.png"
                        alt="Partner Logo 1"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://www.governance.so/dao/5PP7vKjJyLw1MR55LoexRsCj3CpZj9MdD6aNXRrvxG42" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/2.png"
                        alt="Partner Logo 2"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://app.realms.today/dao/LABS" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/3.png"
                        alt="Partner Logo 3"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://raydium.io/swap/?inputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputMint=LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/4.png"
                        alt="Partner Logo 4"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://streamflow.finance/" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/5.png"
                        alt="Partner Logo 5"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://switchboard.xyz/" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/6.png"
                        alt="Partner Logo 6"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://app.realms.today/dao/RED" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/7.png"
                        alt="Partner Logo 7"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://app.realms.today/dao/LABS" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/8.png"
                        alt="Partner Logo 8"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                  <div className="w-full flex items-center justify-center text-white/50 hover:text-white/80 transition-colors duration-300">
                    <a href="https://www.meteora.ag/" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="/9.png"
                        alt="Partner Logo 9"
                        width={140}
                        height={45}
                        className="w-[120px] sm:w-[160px] md:w-[180px] object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <div id="about-section" className="container mx-auto px-4 py-48">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Combined Info Container */}
          <div id="epicentral-labs" className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 mb-4 scroll-mt-32">
            <div className="space-y-12 text-left">
              {/* What is Epicentral Labs? */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a85ff]/20 to-[#4a85ff]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-light text-white/90">
                    What is Epicentral Labs?
                  </h3>
                </div>
                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-white/10 hover:border-[#4a85ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
                  <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                    <b>Epicentral Labs</b> is a protocol focused on bringing Options Trading and financial derivative solutions to <a href="https://solana.com/" className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300 underline">Solana</a>.
                    <br />
                    <br />
                    The name &ldquo;Epicentral&rdquo;, comes from the word "epicenter", symbolizing to be a focal point for innovation in decentralized finance and
                    blockchain development.
                  </p>
                </div>
              </div>

              {/* Gradient Divider */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* Our Mission */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a85ff]/20 to-[#4a85ff]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-light text-white/90">
                    Our Mission
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Innovation Card */}
                  <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-white/10 hover:border-[#4a85ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center group-hover:bg-[#4a85ff]/20 transition-all duration-300">
                        <svg className="w-5 h-5 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-medium text-white/90 group-hover:text-white transition-all duration-300">
                        Innovation
                      </h4>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        The <a href="https://github.com/EpicentralLabs/solana-options-standard-sdk" className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300 underline">Solana Options Standard (SOS)</a> - an on-chain solution for creating, pricing, and trading option contracts on Solana, designed for seamless integration into any DeFi application.
                      </p>
                    </div>
                  </div>

                  {/* Expansion Card */}
                  <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-white/10 hover:border-[#4a85ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center group-hover:bg-[#4a85ff]/20 transition-all duration-300">
                        <svg className="w-5 h-5 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-medium text-white/90 group-hover:text-white transition-all duration-300">
                        Expansion
                      </h4>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        Building robust derivative solutions for the Solana DeFi ecosystem, from customizable Exotic Options to automated hedging strategies, creating powerful tools for traders and developers.
                      </p>
                    </div>
                  </div>

                  {/* Education Card */}
                  <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-white/10 hover:border-[#4a85ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center group-hover:bg-[#4a85ff]/20 transition-all duration-300">
                        <svg className="w-5 h-5 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-medium text-white/90 group-hover:text-white transition-all duration-300">
                        Education
                      </h4>
                      <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                        Leading the Solana ecosystem in options education, empowering users to leverage options for hedging, speculation, and portfolio diversification through comprehensive learning resources.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-4">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="bg-gradient-to-r from-[#4a85ff]/20 to-[#4a85ff]/10 hover:from-[#4a85ff]/30 hover:to-[#4a85ff]/20 text-white transition-all duration-300 
                              hover:shadow-[0_0_20px_rgba(74,133,255,0.2)] hover:scale-105 px-8"
                    onClick={() => window.location.href = '/roadmap'}
                  >
                    View Our Roadmap
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Gradient Divider before $LABS section */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* Powered by $LABS section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a85ff]/20 to-[#4a85ff]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-light text-white/90">
                    Powered by $LABS
                  </h3>
                </div>

                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-white/10 hover:border-[#4a85ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]">
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                      <b><a className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300">LABS</a> is our governance token for</b> <a href="/dao" className="text-[#4a85ff] hover:drop-shadow-[0_0_8px_#4a85ff] transition-all duration-300 underline">EpicentralDAO</a>. Each token is a vote in the decision-making process for Epicentral Labs.
                    </p>
                    
                    <div className="space-y-4">
                      <p className="text-base leading-relaxed text-white/70 font-bold group-hover:text-white/80 transition-all duration-300">
                        As a token holder:
                      </p>
                      
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-white/70 group-hover:text-white/80 transition-all duration-300">
                          <div className="w-6 h-6 rounded-full bg-[#4a85ff]/10 flex items-center justify-center">
                            <span className="text-[#4a85ff] text-sm">•</span>
                          </div>
                          Decide which assets are added to the protocol
                        </li>
                        <li className="flex items-center gap-3 text-white/70 group-hover:text-white/80 transition-all duration-300">
                          <div className="w-6 h-6 rounded-full bg-[#4a85ff]/10 flex items-center justify-center">
                            <span className="text-[#4a85ff] text-sm">•</span>
                          </div>
                          Propose new features and improvements
                        </li>
                        <li className="flex items-center gap-3 text-white/70 group-hover:text-white/80 transition-all duration-300">
                          <div className="w-6 h-6 rounded-full bg-[#4a85ff]/10 flex items-center justify-center">
                            <span className="text-[#4a85ff] text-sm">•</span>
                          </div>
                          Vote on protocol parameter changes
                        </li>
                        <li className="flex items-center gap-3 text-white/70 group-hover:text-white/80 transition-all duration-300">
                          <div className="w-6 h-6 rounded-full bg-[#4a85ff]/10 flex items-center justify-center">
                            <span className="text-[#4a85ff] text-sm">•</span>
                          </div>
                          Stake your $LABS to grow your voting power
                        </li>
                      </ul>
                    </div>

                    <p className="text-base leading-relaxed text-white/70 group-hover:text-white/80 transition-all duration-300">
                      To learn more about $LABS, check out the tokenomics page below:
                    </p>

                    <div className="flex items-center">
                      <Button 
                        size="lg"
                        variant="secondary"
                        className="bg-gradient-to-r from-[#4a85ff]/20 to-[#4a85ff]/10 hover:from-[#4a85ff]/30 hover:to-[#4a85ff]/20 text-white transition-all duration-300 
                                  hover:shadow-[0_0_20px_rgba(74,133,255,0.2)] hover:scale-105 px-8"
                        onClick={() => window.open('/labs-token', '_blank')}
                      >
                        View Tokenomics
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Network Graph iframe */}
                <div className="w-full group">
                  <iframe
                    src="https://widget.vybenetwork.com/network-graph?address=LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR&entity=token&connectionNode=program"
                    title="vybe-network-graph"
                    allow="clipboard-write"
                    className="w-full h-[500px] rounded-lg border border-white/10 group-hover:border-[#4a85ff]/30 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(74,133,255,0.1)]"
                  />
                </div>
              </div>

              {/* Gradient Divider before What We're Shipping section */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* What We're Shipping section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a85ff]/20 to-[#4a85ff]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#4a85ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-light text-white/90">
                    What We're Shipping:
                  </h3>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4 mt-6">
                  <AccordionItem value="opm" className="border-white/10">
                    <AccordionTrigger className="hover:no-underline group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#4a85ff]/20">
                          <ArrowDown className="h-5 w-5 text-[#4a85ff] transition-transform duration-300" />
                        </div>
                        <h4 className="text-xl font-medium text-white/90 transition-all duration-300 \
                                      group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                          <i>Option Pricing Model (OPM)</i>
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70">
                      <div className="pt-4 leading-relaxed">
                        The Option Pricing Model (OPM) is the foundation for how DeFi options are valued on our platform. Inspired by the widely recognized Black-Scholes Model from traditional finance, OPM provides a robust framework for calculating the fair price of options. This model supports both American and European style options, making it the ideal choice for Solana-based derivatives. By leveraging this proven approach, we ensure that option contracts on Solana are priced accurately and transparently, aligning with global standards in financial derivatives.
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="governance" className="border-white/10">
                    <AccordionTrigger className="hover:no-underline group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#4a85ff]/20">
                          <ArrowDown className="h-5 w-5 text-[#4a85ff] transition-transform duration-300" />
                        </div>
                        <h4 className="text-xl font-medium text-white/90 transition-all duration-300 
                                      group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                          <i>OPX</i>
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70">
                      <div className="pt-4 leading-relaxed space-y-4">
                        <p>
                        OPX is an on-chain options trading platform built on the "Solana Options Standard" — an open-source SDK designed to mint, exercise, and validate option pricing for underlying tokens. 
                        <br />
                        <br />
                        It enables anyone to create and trade options, structure multi-legged spreads, and exercise contracts into the underlying assets. 
                        <br />
                        <br />
                        Option sellers can use leverage to earn premiums from time decay without requiring full collateral to open positions. 
                        <br />
                        <br />
                        Liquidity providers earn yield by supplying capital to the margin pool, which is borrowed by market makers (option sellers).  
                        </p>
                        <div className="flex items-center">
                          <Button 
                            size="lg"
                            className="bg-gradient-to-r from-[#4a85ff]/20 to-[#4a85ff]/10 hover:from-[#4a85ff]/30 hover:to-[#4a85ff]/20 text-white transition-all duration-300 
                                      hover:shadow-[0_0_20px_rgba(74,133,255,0.2)] hover:scale-105 px-8"
                            onClick={() => window.location.href = '/coming-soon'}
                          >
                            Coming Soon!
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="security" className="border-white/10">
                    <AccordionTrigger className="hover:no-underline group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#4a85ff]/20">
                          <ArrowDown className="h-5 w-5 text-[#4a85ff] transition-transform duration-300" />
                        </div>
                        <h4 className="text-xl font-medium text-white/90 transition-all duration-300 
                                      group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                          <i>Option Program</i>
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70">
                      <div className="pt-4 leading-relaxed">
                        For option contracts to exist on Solana, an on-chain program validates the creation of new option contracts and the settlement of existing ones as well as
                        ensuring that all options are accurately priced and settled fairly.
                        <div className="flex items-center mt-4">
                          <Button 
                            size="lg"
                            className="bg-gradient-to-r from-[#4a85ff]/20 to-[#4a85ff]/10 hover:from-[#4a85ff]/30 hover:to-[#4a85ff]/20 text-white transition-all duration-300 
                                      hover:shadow-[0_0_20px_rgba(74,133,255,0.2)] hover:scale-105 px-8"
                            onClick={() => window.location.href = '/coming-soon'}
                          >
                            Coming Soon!
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="integration" className="border-white/10">
                    <AccordionTrigger className="hover:no-underline group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#4a85ff]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#4a85ff]/20">
                          <ArrowDown className="h-5 w-5 text-[#4a85ff] transition-transform duration-300" />
                        </div>
                        <h4 className="text-xl font-medium text-white/90 transition-all duration-300 
                                      group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                          <i>Solana Options Standard SDK</i>
                        </h4>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70">
                      <div className="pt-4 leading-relaxed">
                        An open source program development kit (SDK) consisting of different libraries, modules, and pre-made mathematical derivative functions that allow developers to build or implement custom or standardized option contracts on Solana.
                        <div className="flex items-center mt-4">
                          <Button 
                            size="lg"
                            className="bg-gradient-to-r from-[#4a85ff]/20 to-[#4a85ff]/10 hover:from-[#4a85ff]/30 hover:to-[#4a85ff]/20 text-white transition-all duration-300 
                                      hover:shadow-[0_0_20px_rgba(74,133,255,0.2)] hover:scale-105 px-8"
                            onClick={() => window.open('https://github.com/EpicentralLabs', '_blank')}
                          >
                            View on GitHub
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
