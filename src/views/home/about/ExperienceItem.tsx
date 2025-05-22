import { PiMapPinLight } from "react-icons/pi";
import SkillBadge from "./SkillBadge";
import { FiBriefcase } from "react-icons/fi";
import { ExperienceItemProps } from "../../../@types/component";

export default function ExperienceItem({
  date,
  company,
  location,
  remote,
  role,
  points,
  skills,
  images,
}: ExperienceItemProps) {
  return (
    <div className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr_1fr_4fr]">
      <div className="w-full lg:max-w-sm">
        <div className="flex flex-col items-start gap-y-2 text-sm font-light">
          <span className="text-muted-foreground font-normal tracking-wide uppercase">
            {date}
          </span>
          <p className="text-xl font-semibold text-white/90 md:text-2xl">
            {company}
          </p>
          <div className="text-muted-foreground flex items-center gap-1.5">
            <PiMapPinLight className="h-3.5 w-3.5" />
            <span>{location}</span>
          </div>
          {remote && (
            <div className="text-muted-foreground flex items-center gap-1.5">
              <FiBriefcase className="h-3.5 w-3.5" />
              <span>Remote work</span>
            </div>
          )}
        </div>
      </div>
      <div></div>
      <div className="relative w-full">
        <div className="flex flex-col gap-y-5 text-xs leading-relaxed text-neutral-400 md:text-sm">
          <p className="text-xl font-semibold text-neutral-200">{role}</p>
          <ul className="flex list-none flex-col gap-y-3 text-neutral-300/80">
            {points.map((pt, idx) => (
              <li key={idx}>{pt}</li>
            ))}
          </ul>

          {images && (
            <div className="grid grid-cols-2 gap-4">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${company} project ${i + 1}`}
                  width={500}
                  height={240}
                  className="h-20 w-full rounded-lg object-cover md:h-40 lg:h-48"
                />
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
