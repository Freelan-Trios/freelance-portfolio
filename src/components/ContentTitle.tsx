import { ContentTitleProps } from "../@types/component";

export default function ContentTitle({ subtitle, title }: ContentTitleProps) {
  return (
    <h2
      style={{
        textShadow:
          "0px 4px 8px rgba(255,255,255,0.05), 0px 8px 15px rgba(255,255,255,0.25)",
      }}
      className=" top-0 w-full text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center z-30 pb-5"
    >
      <p className="mb-3 text-xs font-medium tracking-widest text-white/70 uppercase md:text-sm">
        {subtitle}
      </p>
      <span className="text-white">{title}</span>
    </h2>
  );
}
