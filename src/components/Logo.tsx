import logoGold from "@/assets/mix-hall-logo-gold.png";
import logoCharcoal from "@/assets/mix-hall-logo-charcoal.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  tone?: "gold" | "charcoal";
  className?: string;
}

const sizes = {
  sm: "h-9 w-auto",
  md: "h-12 w-auto",
  lg: "h-20 sm:h-24 w-auto",
};

export function Logo({ size = "md", tone = "charcoal", className = "" }: LogoProps) {
  return (
    <img
      src={tone === "gold" ? logoGold : logoCharcoal}
      alt="MIX HALL"
      className={`block object-contain ${sizes[size]} ${className}`}
    />
  );
}
