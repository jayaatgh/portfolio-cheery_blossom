import { useInView } from "@/hooks/useInView";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "SQL"],
  },
  {
    title: "Backend & data",
    skills: ["PySpark", "Django", "ETL Pipelines"],
  },
  {
    title: "Cloud platforms",
    skills: ["AWS", "Azure Data Factory", "Snowflake", "Databricks"],
  },
  {
    title: "Engineering foundations",
    skills: ["Data Structures", "System Design", "Data Modeling", "Git"],
  },
];

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* OUTER BENTO */}
        <div
          ref={ref}
          className={`bg-primary/15 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* TITLE */}
          <h2 className="cherry-bomb-one-regular text-center text-4xl lg:text-5xl mb-12">
            What I work with
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* TOP LEFT — INTRO TEXT (WIDE) */}
            <div className="md:col-span-2 bg-gradient-to-br from-primary/20 to-primary/25 rounded-[2rem] p-8">
              <p className="space-y-4 text-muted-foreground leading-relaxed">
                My day job keeps me grounded in strong engineering fundamentals.
                <br />
                My Independent Project work keeps me thoughtful about users and design.
              </p>
            </div>

            {/* TOP RIGHT — SKILL CARD */}
            <div className="bg-gradient-to-br from-sky/20 to-sky/5 backdrop-blur-sm rounded-[2rem] p-6">
              <h3 className="font-medium text-foreground mb-4">
                {skillCategories[0].title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategories[0].skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/80 rounded-full px-4 py-2 text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* BOTTOM LEFT */}
            <div className="bg-gradient-to-br from-sky/20 to-sky/5 backdrop-blur-sm rounded-[2rem] p-6">
              <h3 className="font-medium text-foreground mb-4">
                {skillCategories[1].title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategories[1].skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/80 rounded-full px-4 py-2 text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* BOTTOM MIDDLE */}
            <div className="bg-gradient-to-br from-sky/20 to-sky/5 backdrop-blur-sm rounded-[2rem] p-6">
              <h3 className="font-medium text-foreground mb-4">
                {skillCategories[2].title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategories[2].skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/80 rounded-full px-4 py-2 text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* BOTTOM RIGHT */}
            <div className="bg-gradient-to-br from-sky/20 to-sky/5 backdrop-blur-sm rounded-[2rem] p-6">
              <h3 className="font-medium text-foreground mb-4">
                {skillCategories[3].title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategories[3].skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/80 rounded-full px-4 py-2 text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
