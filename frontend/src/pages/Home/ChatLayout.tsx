import type { LayoutProps } from "@/types/layout"
import { Header } from '@/components'

function ChatLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default ChatLayout