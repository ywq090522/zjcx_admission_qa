import { ThemeToggle } from "@/components";
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className="left">
        {/* TODO: 侧边栏按钮 */}
      </div>
      <div className="mid"></div>
      <div className="right">
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header