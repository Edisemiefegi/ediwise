import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () => {
        const current = get().theme;
        const next = current === "light" ? "dark" : "light";
        set({theme: next})
          document.documentElement.classList.toggle("dark", next === "dark");

      },
      setTheme: (theme: Theme) => {
        set({theme: theme})
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
    }),
    {
      name: "theme-storage", 
    }
  )
);
