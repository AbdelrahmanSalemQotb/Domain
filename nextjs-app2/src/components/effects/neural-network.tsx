"use client";

import { motion } from "framer-motion";

// AI Neural Network Visual - copied exactly from src/pages/Index.tsx
const NeuralNetwork = () => {
  const nodes = [
    { x: 20, y: 30 },
    { x: 35, y: 20 },
    { x: 50, y: 35 },
    { x: 65, y: 25 },
    { x: 80, y: 30 },
    { x: 30, y: 50 },
    { x: 45, y: 60 },
    { x: 60, y: 55 },
    { x: 75, y: 65 },
    { x: 40, y: 80 },
    { x: 55, y: 75 },
    { x: 70, y: 85 },
  ];

  return (
    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
      {nodes.map((node, i) =>
        nodes.slice(i + 1).map((target, j) => (
          <motion.line
            key={`${i}-${j}`}
            x1={`${node.x}%`}
            y1={`${node.y}%`}
            x2={`${target.x}%`}
            y2={`${target.y}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.1, 0.5, 0.1] }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )),
      )}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="4"
          fill="hsl(210 100% 50%)"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <defs>
        <linearGradient
          id="lineGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stopColor="hsl(210 100% 50%)"
            stopOpacity="0.3"
          />
          <stop
            offset="50%"
            stopColor="hsl(220 100% 60%)"
            stopOpacity="0.6"
          />
          <stop
            offset="100%"
            stopColor="hsl(210 100% 50%)"
            stopOpacity="0.3"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { NeuralNetwork };
