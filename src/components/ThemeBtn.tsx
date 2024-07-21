import { Switch } from "./ui/switch";
import { useTheme } from "@/contexts/Theme";

export default function ThemeBtn() {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <Switch value={theme.themeMode} onCheckedChange={(checked: boolean) => {
                checked ? setTheme({ themeMode: "dark" }) : setTheme({ themeMode: "light" })
            }} />
        </div>
    );
}
