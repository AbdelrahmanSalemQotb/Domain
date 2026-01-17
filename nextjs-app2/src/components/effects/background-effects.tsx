"use client";

import { DataStreams } from "./data-streams";
import { FloatingParticles } from "./floating-particles";

// Background Effects wrapper combining DataStreams and FloatingParticles
const BackgroundEffects = () => {
  return (
    <>
      <div className="fixed inset-0 matrix-bg" />
      <DataStreams />
      <FloatingParticles />
    </>
  );
};

export { BackgroundEffects };
