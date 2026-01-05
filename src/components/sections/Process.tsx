import { useInView } from "@/hooks/useInView";
import { Database, Layers, ArrowUpRight, ShoppingCart } from "lucide-react";

const items = [
  {
    title: "Internal Developer Portal",
    description: "Centralized DevEx platform for internal teams.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: Database,
  },
  {
    title: "CI/CD Visibility Platform",
    description: "Pipeline orchestration & execution insights.",
    tech: ["Jenkins", "Docker", "APIs"],
    icon: Layers,
  },
  {
    title: "Distributed Rate Limiting",
    description: "Concurrency-safe API protection system.",
    tech: ["Python", "Concurrency"],
    icon: ArrowUpRight,
  },
  {
    title: "E-commerce Website",
    description: "Full-stack shopping platform (in progress).",
    tech: ["React", "MongoDB"],
    icon: ShoppingCart,
  },
];

const WebsiteSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Outer Bento */}
        <div className="bg-primary/15 rounded-[2.5rem] p-8 lg:p-10">

          {/* Title */}
          <div
            ref={ref}
            className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <h2 className="font-serif text-4xl lg:text-5xl">
              Some of my Full-Stack Projects
            </h2>
          </div>

          {/* 2×2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 transition hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-medium text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebsiteSection;
