export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2" aria-hidden="true">
      <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
        <path
          d="M2 12 H45"
          stroke="var(--color-line)"
          strokeWidth="1"
        />
        <path
          d="M60 4 C 54 8, 54 16, 60 20 C 66 16, 66 8, 60 4 Z"
          fill="var(--color-rose)"
          opacity="0.85"
        />
        <circle cx="60" cy="12" r="2.5" fill="var(--color-moss)" />
        <path
          d="M75 12 H118"
          stroke="var(--color-line)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
