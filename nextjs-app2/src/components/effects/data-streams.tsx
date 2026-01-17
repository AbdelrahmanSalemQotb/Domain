"use client";

import { motion } from "framer-motion";

// Data Stream Effect - copied exactly from src/pages/Index.tsx
const DataStreams = () => {
  const streams = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-20"
          style={{ left: stream.left, height: "150px" }}
          animate={{ y: ["-150px", "100vh"] }}
          transition={{
            duration: stream.duration,
            delay: stream.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export { DataStreams };
