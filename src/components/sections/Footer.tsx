import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/jayaatgh", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jayabhargavi-b-604a74210/", label: "LinkedIn" },
    // { icon: Mail, href: "mailto:jayabargavijaya@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Footer Card */}
          <div className="bg-gradient-to-br from-primary/20 to-primary/25 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-white/40">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo/Name */}
              <div className="text-center md:text-left">
                <p className="font-serif text-lg text-foreground">Portfolio</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Building with purpose
                </p>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-wrap justify-center gap-6">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Social Icons */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center hover:bg-white/90 hover:scale-110 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border/30 mt-6 pt-6">
              <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                Currently evolving <Heart className="w-4 h-4 text-primary fill-primary" /> I keep improving this site as I learn and build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
