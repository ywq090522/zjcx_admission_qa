import { ThemeToggle, MenuButton } from '@/components'
import type { HeaderProps } from '@/types/Header'
import styles from './Header.module.scss'

function Header({ title = '新对话', onToggleSidebar }: HeaderProps) {
  return (
    <header className={styles.header}>
      <MenuButton
        onToggleSidebar={onToggleSidebar}
      />
      {title}
      <ThemeToggle />
    </header>
  )
}

export default Header