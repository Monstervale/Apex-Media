import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {RefObject} from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to initialize a scroller
export const initializeScroller = (
    scrollerRef: RefObject<HTMLDivElement>,
    scrollerInnerRef: RefObject<HTMLDivElement>
) => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion && scrollerRef.current && scrollerInnerRef.current) {
    // Add animation attribute
    scrollerRef.current.setAttribute("data-animated", "true");

    // Clone children and add aria-hidden
    const scrollerContent = Array.from(scrollerInnerRef.current.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLDivElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInnerRef.current?.appendChild(duplicatedItem);
    });
  }
};