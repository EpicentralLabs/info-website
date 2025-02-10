import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Wallet, Lock, Blocks } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-neutral-800 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="w-[100px]">
              <Link href="/">
                <Image 
                  src="/EpicentralLogo.png"
                  alt="Epicentral Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </Link>
            </div>
            
            {/* Centered navigation links */}
            <div className="flex items-center space-x-8">
              <Link 
                href="/"
                className="text-sm font-medium opacity-60 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
              >
                Home
              </Link>
              <Link 
                href="/docs"
                className="text-sm font-medium opacity-60 hover:opacity-100 transition-all hover:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300"
              >
                Docs
              </Link>
            </div>
            
            {/* Launch App button */}
            <div className="w-[100px] flex justify-end">
              <Button 
                size="sm" 
                className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 transition-all duration-300 
                           hover:drop-shadow-[0_0_0.1rem_#FFFFFF] hover:scale-105"
              >
                Launch App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              One-click for Asset{" "}
              <span className="text-muted-foreground">Defense</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Dive into the art assets, where innovative blockchain technology meets financial expertise
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="px-8">
                Open App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Discover More
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardContent className="p-6 space-y-4">
                <Wallet className="h-12 w-12 text-[#4a85ff]" />
                <h3 className="text-xl font-semibold">Asset Management</h3>
                <p className="text-muted-foreground">Secure and efficient handling of digital assets with advanced blockchain technology.</p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardContent className="p-6 space-y-4">
                <Lock className="h-12 w-12 text-[#4a85ff]" />
                <h3 className="text-xl font-semibold">Enhanced Security</h3>
                <p className="text-muted-foreground">State-of-the-art protection for your digital assets with multi-layer security.</p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardContent className="p-6 space-y-4">
                <Blocks className="h-12 w-12 text-[#4a85ff]" />
                <h3 className="text-xl font-semibold">Smart Integration</h3>
                <p className="text-muted-foreground">Seamless integration with multiple blockchain networks and protocols.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              © 2024 Asset Defense. All rights reserved.
            </span>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Terms
              </Button>
              <Button variant="ghost" size="sm">
                Privacy
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
