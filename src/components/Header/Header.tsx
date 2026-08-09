import { ThemeToggle } from "@/components";
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      {/* TODO: 侧边栏按钮 */}
      <ThemeToggle />
    </header>
  )
}

export default Header