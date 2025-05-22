import { motion } from "framer-motion";
import { techStack } from "../../../utils/constants";
import TechStackImage from "../../../assets/image/gpt.webp";
import ContentTitle from "../../../components/ContentTitle";

export default function TechStackSection() {
  return (
    <section className="w-full max-w-7xl mx-auto min-h-[50vh] flex flex-col items-center px-4 text-white text-center py-20">
      <div className="relative mx-auto overflow-hidden">
        <div className="relative mx-auto flex items-center justify-center">
          <img
            src={TechStackImage}
            draggable={false}
            alt="skills cover rotating image"
            className="z-10 opacity-65 select-none w-[350px]"
          />
        </div>

        <ContentTitle
          subtitle="Leveling up—stack by stack"
          title="Technologies Behind Our Work"
        />
      </div>

      <div className="mt-10 w-full max-w-5xl">
        <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto">
          {[...techStack].map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-4 py-1.5 text-sm text-white/80 lg:text-base cursor-pointer transition duration-300 transform hover:scale-150"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <img
                src={tech.image}
                alt={tech.name}
                width={18}
                height={18}
                className="transi tion duration-300 ease-in-out group-hover:scale-150"
              />
              <span className="transition duration-300 group-hover:text-white">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
