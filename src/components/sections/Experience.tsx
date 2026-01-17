import { useInView } from "@/hooks/useInView";

const experiences = [
    {
        title: "Programmer Analyst",
        company: "Cognizant",
        period: "Nov 2024 — Present",
        description:
            "I work on distributed backend and data processing systems, focusing on scalability, fault tolerance, and system reliability.",
    },
    {
        title: "Freelance Website Builder",
        company: "Castororo",
        period: "2024 - 2025",
        description:
            "I design and build clean, friendly websites for individuals and small teams — from structure and layout to development and deployment.",
    },
];

const ExperienceSection = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    return (
        <section id="experience" className="py-20 lg:py-28">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* OUTER BENTO */}
                <div
                    ref={ref}
                    className={`bg-primary/15 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    {/* TITLE */}
                    <h2 className="cherry-bomb-one-regular text-center text-4xl lg:text-5xl mb-12">
                        Work & experience
                    </h2>

                    {/* EXPERIENCE CARDS */}
                    <div className="space-y-8">
                        {experiences.map((exp) => (
                            <div
                                key={exp.title}
                                className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                    <h3 className="font-medium text-lg text-foreground">
                                        {exp.title}
                                    </h3>
                                    <span className="text-sm text-muted-foreground">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-primary text-sm mb-4">
                                    {exp.company}
                                </p>

                                <p className="text-muted-foreground max-w-3xl">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExperienceSection;
