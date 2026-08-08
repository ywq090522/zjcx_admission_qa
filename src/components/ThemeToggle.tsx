import { useTheme } from "@/hooks";
import { Sun, Moon } from "lucide-react";
import './ThemeToggle.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  )
}

export default ThemeToggle
