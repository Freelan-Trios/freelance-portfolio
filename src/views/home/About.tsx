import ExperienceSection from "./about/ExperienceSection";
import KnowAboutMe from "./landing-page/KnowAboutMe";

export default function About() {
  return (
    <>
      <KnowAboutMe />
      <h2
        style={{
          textShadow:
            "0px 4px 8px rgba(255,255,255,0.05), 0px 8px 15px rgba(255,255,255,0.25)",
        }}
        className=" top-0 w-full text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center z-30 pb-5"
      >
        <p className="mb-3 text-xs font-medium tracking-widest text-white/70 uppercase md:text-sm">
          The Experience
        </p>
        <span className=" bg-gradient-to-b from-orange-700 via-zinc-200 to-transparent bg-clip-text text-transparent tracking-wide">
          Experience That Brings Ideas to Life
        </span>
      </h2>
      <ExperienceSection />
    </>
  );
}
