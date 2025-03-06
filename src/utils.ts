import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// const twMerge = extendTailwindMerge({
//   extend: {
//     classGroups: {
//       "font-size": ["text-xxs"],
//     },
//   },
// });

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
