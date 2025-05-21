import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiArrowToRight } from "react-icons/bi";
import { siteURL } from "../../../config";

export default function KnowAboutMe() {
  return (
    <section className="bg-black text-white px-6 py-16 md:px-20 flex flex-col md:flex-row items-center gap-12 w-[80%] mx-auto">
      <div className="flex-1 max-w-3xl">
        <p className="uppercase tracking-wide text-sm text-gray-400 mb-2">
          Know about me
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          A Trio of Full-Stack Developers <br />
          <span className="text-transparent bg-gradient-to-b from-orange-700 via-orange-200 to-orange-50 bg-clip-text">
            and a Whole Lot of Passion
          </span>
        </h1>
        <p className="text-gray-300 mb-4">
          We’re FreelanTrios, a team of three full-stack developers united by
          our love for building sleek, scalable, and smart digital solutions.
          From crafting intuitive frontends to architecting robust backends, we
          thrive on turning ideas into real, usable products — fast and clean.
        </p>
        <p className="text-gray-400 mb-4">
          Our combined expertise spans React, Next.js, Node.js, MongoDB, and
          more — and we’re constantly leveling up to keep pace with evolving
          tech.
        </p>
        <p className="text-gray-500 mb-6">
          Whether you're launching a startup or need a tech partner to bring
          your vision to life — we're here, ready to build.
        </p>

        <div className="flex space-x-4 text-xl text-gray-300 mb-6">
          <Link to="#" className="hover:text-white" aria-label="LinkedIn">
            <BsLinkedin />
          </Link>
          <Link to="#" className="hover:text-white" aria-label="GitHub">
            <BsGithub />
          </Link>
        </div>

        <Link
          to="#"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-sm rounded-full text-white hover:opacity-90 transition"
        >
          More about me <BiArrowToRight />
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={siteURL}
          alt="Profile"
          className="w-64 h-64 rounded-full  object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
