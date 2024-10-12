import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const deviceType = () => {
  const type = navigator.userAgent;

  if (type.includes("Windows")) {
    return "web";
  } else {
    return "mobile";
  }
};
