import { useTheme } from "@/hooks";
import './ThemeToggle.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "light" : "dark"}
    </button>
  )
}

export default ThemeToggle
