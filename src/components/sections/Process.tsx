import { useInView } from "@/hooks/useInView";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Deep dive into requirements, goals, and user needs to build a solid foundation.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create intuitive solutions with clean architecture and user-focused design.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop clean, maintainable, and scalable code with best practices.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Iterate, refine, and optimize based on feedback and performance metrics.",
  },
];

const Process = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Main Card Container - Like "Culinary workshop agenda" */}
          <div 
            className={`bg-gradient-to-br from-primary/20 via-primary/10 to-sky/10 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 shadow-card border border-white/40 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Section header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                How I Work
              </h2>
            </div>
            
            {/* Featured Step - Large Card */}
            <div 
              className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-soft border border-white/50 mb-8 transition-all duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <span className="text-6xl md:text-7xl font-serif text-primary/40">01</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">{steps[0].title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{steps[0].description}</p>
                </div>
              </div>
            </div>

            {/* Step Pills/Cards - Horizontal scroll style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps.slice(1).map((step, index) => (
                <div 
                  key={step.number}
                  className={`bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/40 hover:bg-white/70 transition-all duration-300 hover:-translate-y-1 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <span className="text-2xl font-serif text-primary/40 mb-2 block">{step.number}</span>
                  <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {steps.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === 0 ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
