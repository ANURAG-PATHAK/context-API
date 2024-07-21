import { useEffect, useState } from "react";
import Details from "./components/Details";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeContextProvider, themeType } from "./contexts/Theme";

export default function App() {
  const [theme, setTheme] = useState<themeType>({ themeMode: "light" });
  useEffect(() => {
    document.querySelector('html')?.classList.remove("light", "dark");
    document.querySelector('html')?.classList.add(theme.themeMode)
  }, [theme.themeMode])
  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Details />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}
