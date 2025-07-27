"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { RoadmapCard } from "@/components/roadmap-card";
import { ItemType, StatusChoice } from "@/types/roadmap/RoadmapCardProps";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Roadmap Section */}
      <section className="container mx-auto px-4 py-12 mt-8">
        <div className="max-w-6xl mx-auto">
          {/* Roadmap Heading */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white/90 drop-shadow-[0_0_0.3rem_#ffffff70] mb-6">
              2025 Roadmap
            </h1>

            <p className="text-white/70 max-w-2xl mx-auto mt-4">
              This is an overview of the roadmap items for 2025 set by the
              Epicentral Core Team (in no particular order). Specifics of each
              quarter will be updated as dates get closer.
            </p>
            <p className="text-white/70 max-w-2xl mx-auto mt-4">
            <u>Some items are subject to change.</u>
            </p>
          </div>

          {/* Color Legend */}
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-white/70 text-sm">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-white/70 text-sm">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20"></div>
              <span className="text-white/70 text-sm">TODO</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-white/70 text-sm">Cancelled</span>
            </div>
          </div>

          <div className="space-y-6">
            <RoadmapCard
              quarter="Q1 2025"
              title="Foundation & Reputation Growth"
              status={StatusChoice.Completed}
              description="Establishing the core infrastructure and community foundation for the EpicentralDAO"
              items={[
                {
                  type: ItemType.Community,
                  text: "Host first X/Twitter AMA Call of 2025",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Community,
                  text: "$LABS Verified on Jupiter Exchange",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Community,
                  text: "$LABS Verified on Birdeye",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Community,
                  text: "Epicentral Discord Server reaches 500 members",
                  status: StatusChoice.InProgress,
                },
                {
                  type: ItemType.Community,
                  text: "Epicentral Twitter Account reaches 1000 followers",
                  status: StatusChoice.InProgress,
                },
                {
                  type: ItemType.Community,
                  text: "Realms Ecosystem DAO grants $10,000 to EpicentralDAO for LP Plugin Integration",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Community,
                  text: "Epicentral Labs Whitepaper Debuted",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "Option Pricing Model - OPM(Rust + Typescript)",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "Meteora Plugin Integration with Realms DAOs",
                  status: StatusChoice.Cancelled,
                },
                {
                  type: ItemType.Technical,
                  text: "Orca Integration with Realms DAOs",
                  status: StatusChoice.Cancelled,
                },
                {
                  type: ItemType.Technical,
                  text: "Website Revamp - Landing Page",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "Website Revamp - Roadmap Page",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "Website Revamp - $LABS Tokenomics Page",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "Website Revamp - EpicentralDAO Page",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "Website Revamp - Deploy Finalized Website",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "OPX - UI Design",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "OPX - Option Lab: UI/UX Design",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "OPX - API/RPC Integration",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "OPX - Option Margin Lending Pool (OMLP): UI/UX Design",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "OPX - Trade Page",
                  status: StatusChoice.Completed,
                }
              ]}
            />

            <RoadmapCard
              quarter="Q2 2025"
              title="Collaboration and Offialization"
              status={StatusChoice.InProgress}
              description="Establishing Epicentral Labs as a legal entity, and building partnerships with key Solana partners "
              items={[
                {
                  type: ItemType.Community,
                  text: "Hire intern to run X/Twitter & Social Media",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Community,
                  text: "Contributor Participation Rewards Program",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Community,
                  text: "Receive a second round of grants greater than $10k",
                  status: StatusChoice.Cancelled,
                },
                {
                  type: ItemType.Community,
                  text: "Implement discord price bot",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "Execute agreement with Hello Moon to create options_program for OPX",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Community,
                  text: "Submit pitch to the Solana Breakpoint 2025 Hackathon",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Technical,
                  text: "Secure OPX.MARKETS as OPX protocol domain",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Community,
                  text: " Set up Epicentral Labs, DAO LLC",
                  status: StatusChoice.Completed,
                },
                {
                  type: ItemType.Community,
                  text: "Host 3 AMA Calls on X/Twitter (1)",
                  status: StatusChoice.Cancelled,
                },
              ]}
            />

            <RoadmapCard
              quarter="Q3 2025"
              title="OPX - Solana's Official Options Exchange"
              status={StatusChoice.InProgress}
              description="Creation and launch of OPX, Solana's first official options exchange"
              items={[
                {
                  type: ItemType.Technical,
                  text: "OMLP Program(s)",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Technical,
                  text: "Create Revshare Staking Program",
                  status: StatusChoice.InProgress,
                },
                {
                  type: ItemType.Technical,
                  text: "Create DOCS page",
                  status: StatusChoice.InProgress,
                },
                {
                  type: ItemType.Technical,
                  text: "Option Programs - Create Option",
                  status: StatusChoice.InProgress,
                },
                {
                  type: ItemType.Technical,
                  text: "Option Programs - Validate Option",
                  status: StatusChoice.InProgress,
                },
                {
                  type: ItemType.Community,
                  text: "Initialize a Bug Bounty Program for OPX",
                  status: StatusChoice.InProgress,
                },
                {
                  type: ItemType.Technical,
                  text: "OPX - Devnet Deployment",
                  status: StatusChoice.InProgress,
                },
                {
                  type: ItemType.Technical,
                  text: "OPX - Mainnet Deployment",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Community,
                  text: "Host a Competition for OPX",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Technical,
                  text: "OPX - Release for Beta",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Community,
                  text: "Create X/Twitter Marketing Campaign",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Technical,
                  text: "Implement Programmable Fee Model via DAO proposals",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Technical,
                  text: "OPX - Option Margin Liquidity Pool (OMLP)",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Technical,
                  text: "Integrate Options into other DeFi Protocols (DeFiTuna, Adrena, etc.)",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Community,
                  text: "Create Trade Leaderboard for OPX",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Technical,
                  text: "SOS SDK - Utilizing Option Pricing Model (OPM)",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Technical,
                  text: "SOS SDK - Option Program CPI",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Technical,
                  text: "SOS SDK - Option Margin Liquidity Pool (OMLP)",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Technical,
                  text: "SOS SDK - Option Pricing Model (OPM)",
                  status: StatusChoice.Todo,
                },
                {
                  type: ItemType.Technical,
                  text: "SOS SDK - Option Programs",
                  status: StatusChoice.Todo,
                },
              ]}
            />

            <div className="blur-sm">
              <RoadmapCard
              quarter="Q4 2025"
              title="Awareness & Adoption"
              status={StatusChoice.InProgress}
              description="Create a community-driven initiative to raise awareness about OPX and Options Trading."
              items={[
                {
                type: ItemType.Community,
                text: "Create educational content for OPX/Options Trading",
                status: StatusChoice.Todo,
                },
                {
                type: ItemType.Community,
                text: "Speak or mention of OPX/Options at Solana Breakpoint 2025",
                status: StatusChoice.Todo,
                },
                {
                type: ItemType.Technical,
                text: "Create Video Content page for SOS SDK, Options Trading, and more",
                status: StatusChoice.Todo,
                },
                {
                type: ItemType.Technical,
                text: "Integrate Options into more DeFi Protocols",
                status: StatusChoice.Todo,
                },
              ]}
              />
            </div>
            {/* Add more RoadmapCard components as needed */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-white/90">
                Want to Contribute?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Become a Verified Contributor and help shape the future of DeFi on Solana.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                             hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95"
                  onClick={() => window.open('https://discord.gg/5asAuY2sR8', '_blank')}
                >
                  Join Discord
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-black transition-all duration-300 
                              hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-95 px-4"
                  onClick={() => window.open('https://github.com/EpicentralLabs', '_blank')}
                >
                  GitHub
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