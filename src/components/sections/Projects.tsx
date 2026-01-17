import { useInView } from "@/hooks/useInView";
import {
  Globe,
  ShieldCheck,
  GitBranch,
  ShoppingCart,
} from "lucide-react";

const projects = [
  {
    title: "keyword-extraction-from-research-papers",
    description:
      "Designed a keyword extraction system for research papers(PDF Documents), utilizing a pipeline of tokenization and pre-processing to optimize extraction accuracy.",
    tech: ["Natural Language Processing (NLP)", "TF-IDF", "RAKE", "YAKE"],
    icon: Globe,
  },
  {
    title: "Distributed Rate Limiting & Request Throttling System",
    description:
      "Implemented a rate-limiting service to protect backend APIs from abuse and traffic spikes.",
    tech: ["Python", "Data Structures", "Concurrency", "Algorithms"],
    icon: ShieldCheck,
  },
  {
    title: "Dockerized Security Telemetry Ingestion Service",
    description:
      "Designed a containerized microservice to ingest, validate, and store security telemetry events via REST APIs.",
    tech: ["Pyton", "FastAPI", "Docker", "AWS"], // Python | FastAPI | Docker | AWS
    icon: GitBranch,
  },
  {
    title: "E-Commerce Order Analytics System",
    description:
      "A cloud-native analytics platform using Redshift, DynamoDB, and serverless microservices.",
    tech: ["AWS Redshift", "DynamoDB", "AWS Lambda", "PySpark"],
    icon: ShoppingCart,
  },
];

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 lg:py-24">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* OUTER BENTO */}
        <div
          ref={ref}
          className={`bg-primary/15 backdrop-blur-sm rounded-[2.5rem] p-8 lg:p-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* TITLE */}
          <h2 className="cherry-bomb-one-regular text-center text-4xl lg:text-5xl mb-12">
            Some of my Backend Projects
          </h2>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <div
                  key={project.title}
                  className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 transition hover:-translate-y-1"
                >
                  {/* ICON */}
                  <div className="w-10 h-10 mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-medium text-base text-foreground mb-2">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/70 text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
