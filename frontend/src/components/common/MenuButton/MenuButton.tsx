import { Menu } from 'lucide-react'
import styles from './MenuButton.module.scss'

interface MenuButtonProps {
  className?: string
  onToggleSidebar: () => void
}

function MenuButton({ className, onToggleSidebar }: MenuButtonProps) {
  return (
    <button
      className={`${styles.MenuButton} ${className}`}
      onClick={onToggleSidebar}
    >
      <Menu />
    </button>
  )
}

export default MenuButton