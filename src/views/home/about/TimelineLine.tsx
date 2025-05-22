import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { siteURL } from "../../../config";

export default function TimelineLine() {
  const containerRef = useRef<any>(null);
  const [lineHeight, setLineHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        setLineHeight(containerRef.current.offsetHeight);
      });
      resizeObserver.observe(containerRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const translateY = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 h-full w-8 max-md:ms-6 md:left-[calc(32%-1rem)]"
    >
      <div className="relative h-full w-full">
        <motion.div
          style={{ y: translateY }}
          className="absolute -left-0.5 z-10 flex"
        >
          <div
            className="relative h-9 w-9 overflow-hidden rounded-full shadow-md"
            style={{ width: 48, height: 48 }}
          >
            <img
              src={siteURL}
              alt="Profile"
              className="object-cover"
              style={{
                position: "absolute",
                height: "70%",
                width: "70%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
              }}
            />
          </div>
        </motion.div>

        <div className="absolute top-0 bottom-0 left-1/2 w-1.5 -translate-x-1/2 rounded-full bg-neutral-800 shadow-[inset_0_2px_1.5px_rgba(165,174,184,0.62)]">
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute inset-0 w-full origin-top rounded-full bg-gradient-to-t from-orange-500 via-zinc-300 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
