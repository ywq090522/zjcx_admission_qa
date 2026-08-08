import { useTheme } from "@/hooks";
import { Sun, Moon } from "lucide-react";
import styles from './ThemeToggle.module.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  )
}

export default ThemeToggle