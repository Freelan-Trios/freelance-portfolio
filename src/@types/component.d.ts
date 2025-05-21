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
