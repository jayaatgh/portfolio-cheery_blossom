import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "Global Price Currency Normalization Service",
    description:
      "Designed and implemented a backend service for cross-border price normalization, supporting multiple currencies and regions.",
    tech: ["Python", "REST APIs", "Caching", "Business Logic"],
  },
  {
    title: "Distributed Rate Limiting & Request Throttling System",
    description:
      "Implemented a rate-limiting service to protect backend APIs from abuse and traffic spikes.",
    tech: ["Python", "Data Structures", "Concurrency", "Algorithms"],
  },
  {
    title: "Order Lifecycle State Machine with Failure Recovery",
    description:
      "Designed an order processing system modeling the full order lifecycle (CREATED, PAID, SHIPPED, DELIVERED, CANCELLED).",
    tech: ["Java", "OOP", "State Machines", "Unit Testing"],
  },
  {
    title: "E-Commerce Order Analytics System",
    description:
      "A cloud-native analytics platform using Redshift, DynamoDB, and serverless microservices.",
    tech: ["AWS Redshift", "DynamoDB", "AWS Lambda", "PySpark"],
  },
];

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* OUTER BENTO */}
        <div
          ref={ref}
          className={`bg-primary/15 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* TITLE */}
          <h2 className="cherry-bomb-one-regular text-center text-4xl lg:text-5xl mb-12">
            Selected work
          </h2>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-6 md:p-8"
              >
                <h3 className="font-medium text-lg text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/80 rounded-full px-4 py-2 text-sm text-foreground"
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

export default Projects;
