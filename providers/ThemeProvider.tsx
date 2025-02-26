import { ThemeProvider } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeToggle />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
