import { useEffect, useRef } from "react";
import { Star } from "../@types/component";

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stars = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const createStars = () => {
      stars.current = [];
      for (let i = 0; i < 150; i++) {
        stars.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          delta: Math.random() * 0.02,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    createStars();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let star of stars.current) {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;

        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;

        const fadeFactor = 1 - star.y / height;
        const adjustedAlpha = star.alpha * fadeFactor;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${adjustedAlpha})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-0"
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
      />

      <div
        aria-hidden="true"
        className="absolute mx-auto w-full h-full top-[50%]"
      >
        <div className="animate-scaleIn pointer-events-none relative z-10 mx-auto -mt-32 h-96 w-full [mask-image:radial-gradient(50%_50%,white,transparent)]">
          <div
            className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#ba51068c,transparent_85%)]"
            style={{ opacity: 0.5 }}
          ></div>

          <div className="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%]">
            <div className="absolute inset-0 rounded-[100%] bg-black"></div>

            <div
              className="absolute inset-0 overflow-hidden rounded-[100%]"
              style={{
                background: "transparent",
                boxShadow: "inset 0 2px 20px #fff, 0 -10px 50px 1px #ffffff6e",
              }}
            >
              <div
                className="absolute top-0 right-[25%] left-[25%] h-[3px] bg-gradient-to-r from-transparent via-white to-transparent"
                style={{
                  boxShadow:
                    "rgba(255, 255, 255, 0.808) 0px 0px 15.3566px 3.14263px",
                }}
              ></div>
            </div>
          </div>

          <div
            className="absolute top-1/2 -left-1/2 z-15 aspect-[1/0.7] w-[200%] rounded-[100%] bg-transparent"
            style={{
              boxShadow:
                "rgba(255, 255, 255, 0.42) 0px -5px 41.4263px 1px, rgba(255, 255, 255, 0.416) 0px 1px 10.3566px inset",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
