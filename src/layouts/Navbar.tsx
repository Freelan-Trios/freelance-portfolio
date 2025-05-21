import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiCommandFill } from "react-icons/ri";
import NavItems from "../json/navMenus.json";
import { siteURL } from "../config";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>("Home");

  return (
    <nav className="w-[80%] mx-auto py-4 px-6 grid grid-cols-[20%_60%_20%] items-center">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={siteURL} alt="Logo" width={"35px"} />
        </Link>
      </div>

      <div className="hidden md:flex w-full items-center justify-center">
        <div className="bg-zinc-900/80 max-w-max flex items-center justify-center px-4 py-2 rounded-full">
          {[...NavItems].map((item) => {
            const isActive = activeTab === item.title;
            return (
              <div key={item.id} className="relative px-4">
                {isActive && (
                  <motion.div
                    layoutId="navAnimation"
                    className="absolute inset-0 bg-zinc-800 rounded-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <Link
                  to={item.path}
                  className={`text-sm font-medium relative z-10 px-2 py-1 ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab(item.title)}
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
          <Link
            to="/"
            className="ml-4 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-1 rounded-full text-sm font-medium transition-colors duration-200"
          >
            Book a Call
          </Link>
        </div>
      </div>

      <div className="">
        <button className="">
          <RiCommandFill size={20} />
        </button>
      </div>
    </nav>
  );
}
