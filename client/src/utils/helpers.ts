import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function slugify(name: string) {
   return name.trim().split(" ").join("-").toLowerCase();
}

export function abbreviate(name?: string, length = 2) {
   if (!name) return;
   const parts = name.trim().split(" ");
   const minLength = Math.min(length, parts.length);
   return parts.slice(0, minLength).reduce((previous, current) => previous + current[0], "");
}
