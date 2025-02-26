import { ThemeProvider } from "next-themes";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default CustomThemeProvider;
