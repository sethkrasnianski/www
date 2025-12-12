"use client";

import { useEffect, type PropsWithChildren } from "react";

export function ThemeProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const setDarkTheme = (dark: boolean) => {
      if (dark) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    };

    const handleChangeTheme = (e: MediaQueryListEvent) =>
      setDarkTheme(e.matches);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkTheme(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChangeTheme);
    return () => mediaQuery.removeEventListener("change", handleChangeTheme);
  }, []);

  return <>{children}</>;
}
