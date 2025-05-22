import ExperienceItem from "./ExperienceItem";
import TimelineLine from "./TimelineLine";

export default function ExperienceSection() {
  return (
    <section className="relative mx-auto mt-20 mb-20 max-w-7xl">
      <div className="flex w-full flex-col max-md:ps-20 md:gap-10">
        <ExperienceItem
          date="JAN 2025 - PRESENT"
          company="Roboto Studio"
          location="London Area, United Kingdom"
          remote
          role="Frontend Engineer"
          points={[
            "Developed CMS-driven, reusable pagebuilder blocks...",
            "Built high-performance UIs using Next.js...",
            "Integrated AI features via Vercel AI SDK...",
            "Wrote type-safe TypeScript code...",
            "Contributed 40+ hours/week improving team velocity...",
          ]}
          skills={[
            "TypeScript",
            "Next.js",
            "Sanity CMS",
            "Contentful CMS",
            "Tailwind CSS",
            "Figma",
            "Turborepo",
            "Vercel AI SDK",
            "Agile",
            "Teamwork",
            "Research",
            "Problem-solving",
          ]}
        />

        <ExperienceItem
          date="JUN 2024 - CURRENT"
          company="Open Source"
          location="Coimbatore"
          remote
          role="Open Source Contributor"
          points={[
            "Contributed to projects with 15,000+ stars...",
            "Collaborated with global developers...",
          ]}
          skills={["Next.js", "TypeScript", "Tailwind CSS", "Turborepo"]}
        />
      </div>

      <TimelineLine />
    </section>
  );
}
