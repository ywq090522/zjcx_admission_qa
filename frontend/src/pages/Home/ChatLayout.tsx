import type { LayoutProps } from "@/types/layout"
import { Header } from '@/components'
import { useState } from "react"

function ChatLayout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header
        onToggleSidebar={() => setIsOpen(!isOpen)}
      />
      {children}
    </>
  )
}

export default ChatLayout