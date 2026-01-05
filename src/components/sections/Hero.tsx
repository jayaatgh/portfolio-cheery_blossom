import { Button } from "@/components/ui/button";
import { ArrowDown, FileDown, Sparkles } from "lucide-react";
import pixelGirl from "@/assets/pixel-girl.png";
import { useState } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";

// const navLinks = [
//   { label: "About", href: "#about" },
//   { label: "Skills", href: "#skills" },
//   { label: "Projects", href: "#projects" },
//   { label: "Process", href: "#process" },
//   { label: "Contact", href: "#contact" },
// ];

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden py-6 px-6">
      {/* Main Bento Container */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-primary/25 via-primary/15 to-primary/15 rounded-[2.5rem] p-6 md:p-8 shadow-card border border-white/40 backdrop-blur-sm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-2xl" />




        {/* Hero Content - Bento Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Main Title Area - Large */}
          <div className="lg:col-span-7 bg-gradient-to-br from-primary/20 to-primary/25 rounded-3xl p-8 md:p-10 min-h-[280px] flex flex-col justify-center">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-full text-xs text-foreground font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Software Engineer   |   Freelance Website Builder
              </span>
            </div>


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-foreground opacity-0 animate-fade-in-up animation-delay-100">
              {/* Building calm, reliable systems — and friendly websites that feel just right. */}
              Building {" "}
              <span className="text-primary italic">calm, reliable systems</span>  — and {" "}
              <span className="text-primary">friendly websites</span> that feel just right.
              {/* <br />
              & <span className="italic">thoughtful</span> systems */}
            </h1>
          </div>

          {/* Avatar Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white/50 to-white/50 backdrop-blur-sm rounded-3xl p-6 flex items-center justify-center min-h-[200px] lg:min-h-[280px]">
            <div className="relative opacity-0 animate-fade-in-up animation-delay-200">
              <img
                src={pixelGirl}
                alt="Pixel art avatar"
                className="w-48 h-48 md:w-56 md:h-56 object-contain animate-float"
              />
              <div className="absolute top-0 right-0">

              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-sky/20 to-sky/5 backdrop-blur-sm rounded-3xl p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up animation-delay-300">
              I’m Jayabhargavi, a software engineer working on scalable backend systems,
              and a freelance website builder helping individuals and small teams bring ideas to life.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3 opacity-0 animate-fade-in-up animation-delay-400">
            <Button variant="hero" size="lg" asChild className="rounded-2xl h-14 text-base">
              <a href="#projects">
                <ArrowDown className="mr-2 h-4 w-4" />
                View My Work
              </a>
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              asChild
              className="rounded-2xl h-14 text-base"
            >
              <a href="#contact">
                Let’s Work Together
              </a>
            </Button>
          </div>

          {/* Small Decorative Cards */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="bg-gradient-to-br from-primary/20 to-primary/2 backdrop-blur-sm rounded-2xl p-4 text-center">
              <p className="text-2xl font-serif text-primary">1+</p>
              <p className="text-xs text-muted-foreground">Years Exp</p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/2 backdrop-blur-sm rounded-2xl p-4 text-center">
              <p className="text-2xl font-serif text-primary">5+</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator
        <div className="flex justify-center mt-8 opacity-0 animate-fade-in-up animation-delay-600">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-[0.15em] font-medium">Scroll</span>
            <div className="w-5 h-8 border-2 border-muted-foreground/25 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-1.5 bg-primary/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
