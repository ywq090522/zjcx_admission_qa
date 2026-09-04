import { useTheme } from "@/hooks"
import { Sun, Moon } from "lucide-react"
import styles from './ThemeToggle.module.scss'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      toggleTheme()
    }
  }

  return (
    <button
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      className={styles.themeToggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "切换到亮色模式" : "切换到暗色模式"}
      tabIndex={0}
    >
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  )
}

export default ThemeToggle