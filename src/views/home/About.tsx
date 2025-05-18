import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export default function About() {
  return (
    <div className="min-h-fit max-w-[75%] mx-auto pt-10 px-5 flex justify-center items-center">
      <div className="">
        <div className="mb-3">
          <h2 className="text-gray-800 uppercase tracking-wider text-sm font-semibold">
            MORE ABOUT ME
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-6xl font-bold mb-10">
              Hi there! We
              <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent ml-4">
                Trios
              </span>
            </h1>

            <div className="space-y-5 text-lg">
              <p className="text-gray-700 leading-relaxed">
                I'm Aayush Bharti, a proactive full-stack developer passionate
                about creating dynamic web experiences. From frontend to
                backend, I thrive on solving complex problems with clean,
                efficient code. My expertise spans React, Next.js, and Node.js,
                and I'm always eager to learn more.
              </p>

              <p className="text-gray-700 leading-relaxed">
                When I'm not immersed in work, I'm exploring new ideas and
                staying curious. Life's about balance, and I love embracing
                every part of it.
              </p>

              <p className="text-gray-700 leading-relaxed">
                I believe in waking up each day eager to make a difference!
              </p>

              <div className="flex space-x-4 pt-2 mt-8">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <BsLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <BsGithub size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-700 transition-colors"
                >
                  <BsTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border"></div>
        </div>
      </div>
    </div>
  );
}
