import type { Attack } from "@/types";

export const SwordAndShieldAttacks = [
  { name: "Advancing Slash", mv: 22 },
  { name: "Rising Slash", mv: 18 },
  { name: "Chop", mv: 19, eleMul: 1.3 },
  { name: "Side Slash", mv: 18, eleMul: 1.3 },
  { name: "Diagonal Slash", mv: 24, eleMul: 1.3 },
  { name: "Diagonal Slash II", mv: 27, eleMul: 1.3 },
  { name: "Lateral Slash", mv: 27, eleMul: 1.2 },
  { name: "Return Stroke", mv: 28, eleMul: 1.2 },
  { name: "Spinning Rising Slash", mv: 39, eleMul: 1.2 },
  { name: "Roundslash", mv: 41 },
  { name: "Spinning Reaper", mv: 65 },
  { name: "Shield Attack", mv: 13, eleMul: 0 },
  { name: "Shield Bash", mv: 24, eleMul: 0 },
  { name: "Hard Basher", mv: 37, eleMul: 0 },
  { name: "Guard Slash", mv: 14 },
  { name: "Charged Slash 2", mv: 40 },
  { name: "Scaling Slash", mv: 25 },
  { name: "Jumping Rising Slash", mv: 18 },
  { name: "Jumping Advancing Slash", mv: 18 },
  { name: "Jumping Slash", mv: 20 },
  { name: "Falling Bash 1", mv: 52, eleMul: 0 },
  { name: "Falling Bash 2", mv: 47, eleMul: 0 },
  { name: "Plunging Thrust", mv: 12, eleMul: 0.3 },
  { name: "Sliding Sweep 1", mv: 10 },
  { name: "Sliding Sweep 2", mv: 50 },
  { name: "Sliding Slash 1", mv: 12 },
  { name: "Sliding Slash 2", mv: 30 },
  { name: "Leaping Slash", mv: 30 },
  { name: "Perfect Rush I 1", mv: 10, eleMul: 0 },
  { name: "Perfect Rush I 2", mv: 15 },
  { name: "Perfect Rush I 3", mv: 15 },
  { name: "Perfect Rush II", mv: 20, eleMul: 0 },
  { name: "Perfect Rush III", mv: 30 },
  { name: "Perfect Rush III Hits", mv: 10 },
  { name: "Power Perfect Rush I 1", mv: 40, eleMul: 0 },
  { name: "Power Perfect Rush I 2", mv: 40, eleMul: 1.5 },
  { name: "Power Perfect Rush I 3", mv: 45, eleMul: 1.5 },
  { name: "Power Perfect Rush II", mv: 55, eleMul: 0 },
  { name: "Power Perfect Rush III", mv: 80, eleMul: 1.5 },
  { name: "Power Perfect Rush III Hits", mv: 20 },
  { name: "Charged Chop 1", mv: 18 },
  { name: "Charged Chop 2", mv: 28, eleMul: 1.2 },
  { name: "Charged Chop 3", mv: 14, eleMul: 0.3 },
  { name: "Power Charged Chop 3", mv: 28, eleMul: 1.25 },
  { name: "Counter Slash", mv: 50, eleMul: 1.5 },
  { name: "Recovering Slash", mv: 18 },
  { name: "Vital Stab", mv: 15 },
  { name: "Vital Stab (Opening Wound)", mv: 19, eleMul: 0.3 },
  { name: "Falling Slash", mv: 20 },
  { name: "Falling Slash Hits", mv: 7, eleMul: 0.3 },
  { name: "Upswing Bash", mv: 20, eleMul: 0 },
  { name: "Upswing Bash Hits", mv: 20, eleMul: 0 },
] satisfies Attack[];
