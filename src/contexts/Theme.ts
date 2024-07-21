import { createContext, useContext } from "react";

interface themeType {
    themeMode: string;
}

interface ThemeContextType {
    theme: themeType;
    setTheme: (theme: themeType) => void;
}

const defaultThemeValue: ThemeContextType = {
    theme: {
        themeMode: "light"
    },
    setTheme: () => { }
};

export const ThemeContext = createContext<ThemeContextType>(defaultThemeValue);
export const ThemeContextProvider = ThemeContext.Provider;

export function useTheme() {
    return useContext(ThemeContext);
}

export type { ThemeContextType, themeType };