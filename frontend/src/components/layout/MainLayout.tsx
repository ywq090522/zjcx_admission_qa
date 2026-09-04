import { Outlet } from 'react-router-dom'
import { Header } from "@/components"
import { useState } from "react"

function MainLayout() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  const handleToggleSideOpen = () => {
    setSideMenuOpen(!sideMenuOpen)
  }

  return (
    <>
      <Header
        onToggleSideMenu={handleToggleSideOpen}
      />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout