import { ThemeToggle } from "@/components"
import styles from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <ThemeToggle />
      </header>
      {children}
      <footer>
        <span className={styles.tips}>内容由 AI 生成, AI 也会犯错, 请仔细甄别。</span>
      </footer>
    </>
  )
}

export default Layout