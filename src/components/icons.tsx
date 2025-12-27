import type { SVGProps } from "react";

export function SkillGapLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M7 21V7" />
      <path d="M12 21V12" />
      <path d="M17 21V17" />
      <path d="M7 3l-4 4 4 4" />
      <path d="M17 3l4 4-4 4" />
    </svg>
  );
}
