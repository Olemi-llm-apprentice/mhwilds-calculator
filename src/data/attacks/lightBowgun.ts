import { Attack } from "@/types";

export const LightBowgunAttacks = [
  { name: "Normal Lv1", mv: 9.75, hits: 3 },
  { name: "Normal Lv2", mv: 13.65, hits: 3 },
  { name: "Normal Lv3", mv: 18.525, hits: 3 },
  { name: "Pierce Lv1", mv: 8.8 },
  { name: "Pierce Lv2", mv: 9.6 },
  { name: "Pierce Lv3", mv: 9.6 },
  { name: "Spread Lv1", mv: 7.7, spreadPowerShot: true },
  { name: "Spread Lv2", mv: 8.855, spreadPowerShot: true },
  { name: "Spread Lv3", mv: 10.01, spreadPowerShot: true },
  { name: "Slicing", mv: 26.4 },
  { name: "Sticky Lv1", mv: 12.5, rawEle: 1.75, ignoreHzv: true },
  // { name: "Sticky Lv2", mv: 16, rawEle: 2.275, ignoreHzv: true },
  // { name: "Sticky Lv3", mv: 20, rawEle: 2.975, ignoreHzv: true },
  // { name: "Cluster Lv1", mv: 10, rawEle: 5, ignoreHzv: true },
  // { name: "Cluster Lv2", mv: 12, rawEle: 8, ignoreHzv: true },
  // { name: "Cluster Lv3", mv: 14, rawEle: 1, ignoreHzv: true },
  { name: "Element Lv1", mv: 5.2, rawEle: 13 },
  { name: "Element Lv2", mv: 6.5, rawEle: 16.25 },
] satisfies Attack[];
