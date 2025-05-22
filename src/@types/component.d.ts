export interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  delta: number;
  vx: number;
  vy: number;
}

export interface FancyButtonProps {
  label: string;
  icon: React.ReactNode;
  color?: string;
  onPressClick?: () => void;
  className?: string;
}

export interface CopyButtonProps {
  textToCopy: string;
  label?: string;
}

export interface ContentTitleProps {
  title: string;
  subtitle: string;
}

export interface ExperienceItemProps {
  date: string;
  company: string;
  location: string;
  remote?: boolean;
  role: string;
  points: string[];
  skills: string[];
  images?: string[];
}

export type SkillBadgeProps = {
  label: string;
};
