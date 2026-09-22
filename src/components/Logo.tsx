interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "text-lg",
  md: "text-[22px]",
  lg: "text-3xl",
};

export function Logo({ size = "md", className = "" }: LogoProps) {
  return (
    <span aria-label="MIX HALL" className={`inline-flex flex-col font-black leading-[0.82] tracking-[-0.07em] text-primary ${sizes[size]} ${className}`}>
      <span>MIX</span>
      <span>HALL</span>
    </span>
  );
}
