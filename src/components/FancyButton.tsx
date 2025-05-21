import { FancyButtonProps } from "../@types/component";

export default function FancyButton({
  label,
  icon,
  color = "",
  onPressClick,
  className = "",
}: FancyButtonProps) {
  return (
    <button
      className={`${className} button cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent shadow-lg hover:scale-[1.03] `}
      style={{ color: color }}
      onClick={onPressClick}
    >
      <span className="button-decor"></span>
      <div className="button-content">
        <div className="button__icon">{icon}</div>
        <span className="button__text text-sm">{label}</span>
      </div>
    </button>
  );
}
