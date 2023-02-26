import { ReactNode } from 'react'

interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-w-[320px] max-w-md mx-auto h-screen max-h-screen relative">{children}</div>
  )
}
