import { SkillBadgeProps } from "../../../@types/component";

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
      {label}
    </span>
  );
}
