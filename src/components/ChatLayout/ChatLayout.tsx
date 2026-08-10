import styles from './ChatLayout.module.scss'
import { Header } from '@/components'

interface LayoutProps {
  children: React.ReactNode
}

function ChatLayout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  )
}

export default ChatLayout