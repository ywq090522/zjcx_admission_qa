import { useState, useEffect } from "react";

function useTheme() {
  // 使用箭头函数初始化 useState 来惰性初始化
  const [theme, setTheme] = useState(() => {
    // 优先读取用户设置
    const saved = localStorage.getItem("theme")
    if (saved) return saved
    // 读取系统设置
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  })

  // 同步到 DOM 和 localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  // 切换主题
  const toggleTheme = () => {
    return setTheme(prev => prev === "dark" ? "light" : "dark")
  }

  return {theme, setTheme, toggleTheme}
}

export default useTheme
