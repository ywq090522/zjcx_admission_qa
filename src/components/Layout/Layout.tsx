import styles from './Layout.module.scss'
import { Header } from '@/components'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  )
}

export default Layout