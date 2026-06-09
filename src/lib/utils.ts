import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Matches the UAE landing route and any nested subroutes. Using `.includes("/ae")`
 * incorrectly matches paths like `/aerospace`, `/features/ae-x`, etc.
 */
export function isUaePath(pathname: string): boolean {
  return (
    pathname === "/ae" ||
    pathname.startsWith("/ae/") ||
    pathname === "/uae" ||
    pathname.startsWith("/uae/")
  );
}
