import { IconType } from 'react-icons'

import Link, { LinkProps } from 'next/link'

interface TabProps extends LinkProps {
  icon: IconType
  label: string
}

export const Tab = ({ icon: Icon, label, ...rest }: TabProps) => {
  return (
    <Link
      {...rest}
      className="flex flex-col flex-1 items-center justify-center active:-translate-y-1"
    >
      <Icon />
      <span className="font-semibold text-sm">{label}</span>
    </Link>
  )
}
