import { FaLocationArrow } from "react-icons/fa";
import BackgroundParticles from "../../components/BackgroundParticles";
import FancyButton from "../../components/FancyButton";
import CopyToClipboardWithConfetti from "../../components/CopyToClipboardWithConfetti";
import { siteEmail } from "../../config";
import TechStack from "./landing-page/TechStack";
import KnowAboutMe from "./landing-page/KnowAboutMe";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden lg:bg-center">
        <BackgroundParticles />
        <div className="relative z-20 mx-auto mt-32 mb-2 flex max-w-full flex-col items-center justify-center px-3 md:mt-36 md:max-w-4xl lg:max-w-7xl">
          <h2 className="animate-fadeInUp my-2 w-full py-px text-center text-4xl leading-snug font-semibold text-balance text-zinc-700 opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100">
            <span className="md:whitespace-nowrap">
              Tech meets talent. Delivered by three.
              {/* Three developers. Infinite possibilities. */}
              {/* From idea to impact powered by Three. */}
            </span>
            <br className="hidden md:block" />
            {/* into seamless &nbsp; */}
            <span className="font-navollen bg-gradient-to-b from-orange-700 via-orange-200 to-orange-50 bg-clip-text font-light tracking-wide text-transparent mt-8 inline-block">
              We help founders and startups bring their products to life and
              scale them.
            </span>
          </h2>
          <div className="mt-7 flex items-center justify-center gap-5">
            <FancyButton
              label="Let's Connect"
              icon={<FaLocationArrow className="text-white" size={15} />}
              color="white"
              onPressClick={() => alert("Payment button clicked!")}
            />
            <CopyToClipboardWithConfetti
              textToCopy={siteEmail}
              label={siteEmail}
            />
          </div>
        </div>
      </section>
      <TechStack />
      <KnowAboutMe />
    </>
  );
}
