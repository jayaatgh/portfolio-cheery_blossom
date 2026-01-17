import { useInView } from "@/hooks/useInView";
import pixelGirl from "@/assets/avator.png";
import { Code2, Cloud, Lightbulb } from "lucide-react";

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* OUTER CONTAINER */}
          <div className="bg-primary/15 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12">

            {/* TITLE */}
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-12">
              A little about me
            </h2>

            {/* TOP GRID: AVATAR + TEXT */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">

              {/* SMALL LEFT CARD — AVATAR */}
              <div className="md:col-span-4 bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex items-center justify-center">
                <img
                  src={pixelGirl}
                  alt="Avatar"
                  className="w-44 h-44 md:w-56 md:h-56 object-contain animate-float"
                />
              </div>

              {/* WIDE RIGHT CARD — ABOUT TEXT */}
              <div className="md:col-span-8 bg-gradient-to-br from-primary/20 to-primary/25 rounded-3xl p-8">
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  Hello there!
                </h3>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I work a 9–5 as a Software Engineer, where I design and build backend systems that need to be scalable, reliable, and calm under pressure.
                  </p>
                  <p>
                    Outside of my full-time role, I build side projects and web applications that focus on clean architecture, performance, and usability.
                  </p>
                  <p>
                    I enjoy bridging the gap between solid engineering and pleasant user experiences — whether that’s a data pipeline or a personal website.
                  </p>
                </div>
              </div>

            </div>

            {/* BOTTOM GRID: 3 CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-gradient-to-br from-sky/20 to-sky/5 backdrop-blur-sm rounded-3xl p-6">
                <div className="w-12 h-12 rounded-2xl bg-sky/30 flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-serif text-lg text-foreground mb-2">
                  Cloud Expert
                </h4>
                <p className="text-sm text-muted-foreground">
                  AWS, Azure, Snowflake & more
                </p>
              </div>

              <div className="bg-gradient-to-br from-sky/20 to-sky/5 backdrop-blur-sm rounded-3xl p-6">
                <div className="w-12 h-12 rounded-2xl bg-peach/40 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-serif text-lg text-foreground mb-2">
                  Clean Code
                </h4>
                <p className="text-sm text-muted-foreground">
                  Maintainable & scalable solutions
                </p>
              </div>

              <div className="bg-gradient-to-br from-sky/20 to-sky/5 backdrop-blur-sm rounded-3xl p-6">
                <div className="w-12 h-12 rounded-2xl bg-lavender/40 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-serif text-lg text-foreground mb-2">
                  Problem Solver
                </h4>
                <p className="text-sm text-muted-foreground">
                  Thoughtful & creative approach
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
