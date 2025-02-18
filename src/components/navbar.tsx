"use client"

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full backdrop-blur-sm z-50 bg-black/20 relative">
      {/* Remove the border-b and adjust the fade-out effect */}
      <div className="absolute -bottom-16 left-0 right-0 h-16 bg-gradient-to-b from-black/20 via-black/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
              <Image 
                src="/EpicentralLogo.png"
                alt="Epicentral Logo"
                width={27}
                height={27}
                className="object-contain"
              />
              <span className="text-base font-medium opacity-100 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.4rem_#ffffff70] duration-300">
                Epicentral Labs
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className="text-sm font-medium opacity-60 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
            >
              Home
            </Link>
            
            {/* Vertical Gradient Divider */}
            <div className="relative h-4 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              <div className="h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent relative"></div>
            </div>

            {/* Add DAO Link */}
            <Link 
              href="/dao"
              className="text-sm font-medium opacity-60 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
            >
              DAO
            </Link>

            {/* Vertical Gradient Divider */}
            <div className="relative h-4 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              <div className="h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent relative"></div>
            </div>

            <Link 
              href="/docs"
              className="text-sm font-medium opacity-60 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
            >
              Docs
            </Link>

            {/* Vertical Gradient Divider */}
            <div className="relative h-4 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              <div className="h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent relative"></div>
            </div>

            {/* Add Roadmap Link */}
            <Link 
              href="/roadmap"
              className="text-sm font-medium opacity-60 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
            >
              Roadmap
            </Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              <Link 
                href="https://x.com/EpicentralLabs" 
                target="_blank"
                className="text-white/70 hover:text-white transition-all duration-300 
                           hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              <Link 
                href="https://t.me/EpicentralLabs"
                target="_blank"
                className="text-white/70 hover:text-white transition-all duration-300 
                           hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </Link>

              <Link 
                href="https://github.com/EpicentralLabs" 
                target="_blank"
                className="text-white/70 hover:text-white transition-all duration-300 
                           hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </Link>

              <Link 
                href="https://discord.gg/5asAuY2sR8" 
                target="_blank"
                className="text-white/70 hover:text-white transition-all duration-300 
                           hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                <svg
                  viewBox="0 -28.5 256 256"
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/10 w-10 h-10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bg-black/60 backdrop-blur-lg border-t border-white/10 animate-in fade-in slide-in-from-top duration-300">
            <div className="px-6 py-6 space-y-6">
              <Link 
                href="/"
                className="block text-base font-medium opacity-80 hover:opacity-100 transition-all 
                           hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Gradient Divider */}
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>
              
              {/* Add DAO Link in mobile menu */}
              <Link 
                href="/dao"
                className="block text-base font-medium opacity-80 hover:opacity-100 transition-all 
                           hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                DAO
              </Link>
              
              {/* Gradient Divider */}
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>
              
              <Link 
                href="/docs"
                className="block text-base font-medium opacity-80 hover:opacity-100 transition-all 
                           hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </Link>

              {/* Gradient Divider */}
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative"></div>
              </div>

              {/* Add Roadmap Link in mobile menu */}
              <Link 
                href="/roadmap"
                className="block text-base font-medium opacity-80 hover:opacity-100 transition-all 
                           hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </Link>

              {/* Social Icons in Mobile Menu */}
              <div className="flex items-center space-x-8 pt-2">
                {/* Social icons (same as desktop) */}
                {/* ... Copy the social icons from above ... */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 