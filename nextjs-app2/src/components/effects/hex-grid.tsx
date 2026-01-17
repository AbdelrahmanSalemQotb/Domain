// Hexagon Grid Background - copied exactly from src/pages/Index.tsx
// This is a static SVG so it can be a Server Component
const HexGrid = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="hexagons"
        width="50"
        height="43.4"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(2)"
      >
        <polygon
          points="25,0 50,12.5 50,37.5 25,50 0,37.5 0,12.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-primary"
        />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      fill="url(#hexagons)"
    />
  </svg>
);

export { HexGrid };
