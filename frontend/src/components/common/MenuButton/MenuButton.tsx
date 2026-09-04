import { Menu } from 'lucide-react'
import styles from './MenuButton.module.scss'

export interface MenuButtonProps {
  onToggleSidebar: () => void
}

function MenuButton({ onToggleSidebar }: MenuButtonProps) {
  return (
    <button
      className={`${styles.MenuButton}`}
      onClick={onToggleSidebar}
    >
      <Menu />
    </button>
  )
}

export default MenuButton