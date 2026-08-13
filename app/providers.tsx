"use client";

import { ReactNode } from "react";
import { AppStateProvider } from "@/context/AppStateContext";
import { ThemeProvider } from "@/context/ThemeContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AppStateProvider>{children}</AppStateProvider>
    </ThemeProvider>
  );
}
