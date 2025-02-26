import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeToggle />
      {children}
    </ThemeProvider>
  );
};

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "dark" || systemTheme === "dark" ? "light" : "dark")}>
      {theme === "dark" || systemTheme === "dark" ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
};

export default CustomThemeProvider;
