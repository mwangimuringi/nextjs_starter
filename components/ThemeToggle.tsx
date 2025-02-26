import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" || systemTheme === "dark" ? "light" : "dark")}
      className="transition duration-300 ease-in-out transform hover:scale-110"
    >
      {theme === "dark" || systemTheme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
