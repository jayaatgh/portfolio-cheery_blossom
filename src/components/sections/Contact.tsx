import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import woman from "@/assets/woman.png";
import flower from "@/assets/pink-cosmos.png";

const socialLinks = [
  // { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jayabhargavi-b-604a74210/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/jayaatgh", label: "GitHub" },
  // { icon: Instagram, href: "https://www.instagram.com/its_me_katara_chang", label: "Instagram" },
];

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_mhnbrw6",      // ← replace
        "template_86wbp55",     // ← replace
        formRef.current,
        "_6AkWR8B6hTsxgQq4"       // ← replace
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div
            className={`bg-gradient-to-br from-primary/20 via-primary/10 to-sky/10
            backdrop-blur-sm rounded-[2.5rem] overflow-hidden shadow-card border border-white/40
            transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid md:grid-cols-2">
              {/* LEFT — FORM */}
              <div className="p-8 md:p-12 relative">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                    Let’s Connect
                  </h2>

                  <div className="flex gap-2 ml-auto">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm
                        flex items-center justify-center hover:bg-white/90
                        hover:scale-110 transition-all duration-200 shadow-sm"
                      >
                        <social.icon className="w-4 h-4 text-foreground" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* FORM */}
                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="from_name"
                      placeholder="Name"
                      required
                      className="bg-white/60 backdrop-blur-sm border-white/50 rounded-xl h-12"
                    />
                    <Input
                      name="from_email"
                      type="email"
                      placeholder="Email"
                      required
                      className="bg-white/60 backdrop-blur-sm border-white/50 rounded-xl h-12"
                    />
                  </div>

                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    required
                    className="bg-white/60 backdrop-blur-sm border-white/50 rounded-xl min-h-[120px] resize-none"
                  />

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={loading}
                    className="w-full rounded-xl"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {/* STATUS MESSAGE */}
                {status === "success" && (
                  <p className="mt-4 text-sm text-green-600">
                    💌 Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-sm text-red-500">
                    😢 Something went wrong. Please try again.
                  </p>
                )}

                {/* INFO CARDS */}
                <div className="grid grid-cols-3 gap-3 mt-8">
                  {[
                    { label: "Location", value: "India" },
                    { label: "Availability", value: "Open" },
                    { label: "Friendly chats", value: "Always welcome" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center"
                    >
                      <p className="text-xs text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — DECORATIVE */}
              <div className="hidden md:block relative bg-gradient-to-br from-primary/10 to-sky/10 overflow-hidden">
                {/* FLOWERS */}
                <img
                  src={flower}
                  className="absolute top-10 left-12 w-16 opacity-40 animate-float-slow"
                />
                <img
                  src={flower}
                  className="absolute bottom-16 right-16 w-20 opacity-50 animate-float"
                />
                <img
                  src={flower}
                  className="absolute top-1/3 right-24 w-12 opacity-30 animate-float-delayed"
                />

                {/* CENTERED BOW */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <img
                    src={woman}
                    alt="Decorative illustration"
                    className="w-44 h-44 object-contain mb-6"
                  />
                  <p className="text-sm text-foreground/60 font-medium">
                    Looking forward to hearing from you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
