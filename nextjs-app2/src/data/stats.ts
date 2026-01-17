import { Globe, Brain, Radio, Wifi } from "lucide-react";
import { Stat } from "@/types/stat";

export const getStats = (t: (key: string) => string): Stat[] => [
  {
    value: 2500000,
    label: t("stats.domainsIndexed"),
    suffix: "+",
    icon: Globe,
  },
  {
    value: 150000,
    label: t("stats.aiPredictions"),
    suffix: "",
    icon: Brain,
  },
  {
    value: 99.999,
    label: t("stats.uptimeSLA"),
    suffix: "%",
    icon: Radio,
  },
  {
    value: 500,
    label: t("stats.edgeLocations"),
    suffix: "+",
    icon: Wifi,
  },
];
