import { Brain, Shield, Network, Cpu } from "lucide-react";
import { Feature } from "@/types/feature";

export const getFeatures = (t: (key: string) => string): Feature[] => [
  {
    icon: Brain,
    title: t("features.neuralDNS.title"),
    description: t("features.neuralDNS.description"),
    stats: "0.001ms",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: t("features.quantumShield.title"),
    description: t("features.quantumShield.description"),
    stats: "256-QBit",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Network,
    title: t("features.meshNetwork.title"),
    description: t("features.meshNetwork.description"),
    stats: "500+ Nodes",
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: Cpu,
    title: t("features.edgeCompute.title"),
    description: t("features.edgeCompute.description"),
    stats: "< 1ms",
    color: "from-blue-500 to-blue-600",
  },
];
