import { ThemeToggle, MenuButton } from '@/components/common'

export interface HeaderProps {
  title?: string
  onToggleSideMenu: () => void
}

function Header({ title, onToggleSideMenu }: HeaderProps) {
  return (
    <header
      className="flex items-center justify-between bg-inherit border-b border-border-color px-3 h-12 sm:px-4 sm:h-14 sticky top-0 z-sticky supports-[backdrop-filter]:bg-[--bg-primary-alpha] supports-[backdrop-filter]:backdrop-blur-[20px]"
      role="banner"
      aria-label="页面头部"
    >
      <MenuButton
        onToggleSidebar={onToggleSideMenu}
      />
      <h1
        className="text-base font-medium truncate max-w-[60%]"
      >
        {title || '未命名'}
      </h1>
      <ThemeToggle />
    </header>
  )
}

export default Header