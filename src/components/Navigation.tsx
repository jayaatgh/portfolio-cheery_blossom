// import { useState, useEffect, useRef } from "react";
// import { Menu, ChevronDown, FileDown, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu";

// const navLinks = [
//   { href: "#about", label: "About", icon: "✦" },
//   { href: "#skills", label: "Skills", icon: "◈" },
//   { href: "#experience", label: "Experience", icon: "◇" },
//   { href: "#projects", label: "Projects", icon: "❖" },
//   { href: "#contact", label: "Contact", icon: "♢" },
// ];

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isVisible, setIsVisible] = useState(true);
//   const lastScrollY = useRef(0);
//   const ticking = useRef(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ticking.current) {
//         window.requestAnimationFrame(() => {
//           const currentScrollY = window.scrollY;
//           const scrollThreshold = 50;
          
//           // Determine scroll direction
//           if (currentScrollY > scrollThreshold) {
//             if (currentScrollY > lastScrollY.current) {
//               // Scrolling down - hide header
//               setIsVisible(false);
//             } else {
//               // Scrolling up - show header
//               setIsVisible(true);
//             }
//           } else {
//             // At top of page - always show
//             setIsVisible(true);
//           }
          
//           setIsScrolled(currentScrollY > scrollThreshold);
//           lastScrollY.current = currentScrollY;
          
//           // Determine active section
//           const sections = navLinks.map(link => link.href.slice(1));
//           for (const section of [...sections].reverse()) {
//             const element = document.getElementById(section);
//             if (element) {
//               const rect = element.getBoundingClientRect();
//               if (rect.top <= 150) {
//                 setActiveSection(section);
//                 break;
//               }
//             }
//           }
          
//           ticking.current = false;
//         });
        
//         ticking.current = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
//         isScrolled 
//           ? 'py-3 glass shadow-soft border-b border-border/30' 
//           : 'py-5 bg-transparent'
//       } ${
//         isVisible 
//           ? 'translate-y-0 opacity-100' 
//           : '-translate-y-full opacity-0'
//       }`}
//     >
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <a 
//             href="#" 
//             className="group flex items-center gap-2"
//             onClick={(e) => {
//               e.preventDefault();
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }}
//           >
//             <Sparkles className="w-5 h-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
//             <span className="font-serif text-xl text-foreground tracking-tight">
//               Portfolio
//             </span>
//           </a>
          
//           {/* Desktop navigation - Dropdown */}
//           <div className="hidden md:flex items-center gap-4">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button 
//                   variant="ghost" 
//                   className="group gap-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full px-5"
//                 >
//                   <span className="font-medium">Navigate</span>
//                   <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent 
//                 align="end" 
//                 className="w-56 p-2 glass border-border/50 shadow-card rounded-2xl"
//               >
//                 {navLinks.map((link, index) => (
//                   <DropdownMenuItem
//                     key={link.href}
//                     onClick={() => scrollToSection(link.href)}
//                     className={`
//                       flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
//                       transition-all duration-200 focus:bg-secondary/80
//                       ${activeSection === link.href.slice(1) 
//                         ? 'bg-secondary text-foreground' 
//                         : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
//                       }
//                       opacity-0 animate-fade-in-up
//                     `}
//                     style={{ animationDelay: `${index * 50}ms` }}
//                   >
//                     <span className="text-primary text-sm">{link.icon}</span>
//                     <span className="font-medium">{link.label}</span>
//                   </DropdownMenuItem>
//                 ))}
//                 <DropdownMenuSeparator className="my-2 bg-border/50" />
//                 <DropdownMenuItem
//                   className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20"
//                 >
//                   <FileDown className="w-4 h-4" />
//                   <span className="font-medium">Download Resume</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <Button variant="soft" size="sm" className="rounded-full px-6">
//               <FileDown className="w-4 h-4 mr-2" />
//               Resume
//             </Button>
//           </div>
          
//           {/* Mobile navigation - Dropdown */}
//           <div className="md:hidden">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button 
//                   variant="ghost" 
//                   size="icon"
//                   className="rounded-full hover:bg-secondary/50"
//                 >
//                   <Menu className="w-5 h-5" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent 
//                 align="end" 
//                 className="w-64 p-3 glass border-border/50 shadow-card rounded-2xl mr-2"
//               >
//                 {navLinks.map((link, index) => (
//                   <DropdownMenuItem
//                     key={link.href}
//                     onClick={() => scrollToSection(link.href)}
//                     className={`
//                       flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer
//                       transition-all duration-200
//                       ${activeSection === link.href.slice(1) 
//                         ? 'bg-secondary text-foreground' 
//                         : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
//                       }
//                       opacity-0 animate-fade-in-up
//                     `}
//                     style={{ animationDelay: `${index * 50}ms` }}
//                   >
//                     <span className="text-primary">{link.icon}</span>
//                     <span className="font-medium text-base">{link.label}</span>
//                   </DropdownMenuItem>
//                 ))}
//                 <DropdownMenuSeparator className="my-2 bg-border/50" />
//                 <DropdownMenuItem
//                   className="flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer bg-primary/10 text-primary hover:bg-primary/20"
//                 >
//                   <FileDown className="w-4 h-4" />
//                   <span className="font-medium">Download Resume</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
