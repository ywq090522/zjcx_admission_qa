import { useState, useEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme")
    if (saved) return saved
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return [theme, setTheme]
}

export default useTheme
