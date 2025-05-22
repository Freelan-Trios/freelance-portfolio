import TechStack from "./landing-page/TechStack";
import KnowAboutMe from "./landing-page/KnowAboutMe";
import BackgroundParticles from "./landing-page/BackgroundParticles";
import LandingIntro from "./landing-page/LandingIntro";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden lg:bg-center">
        <BackgroundParticles />
        <LandingIntro />
      </section>
      <TechStack />
      <KnowAboutMe />
    </>
  );
}
