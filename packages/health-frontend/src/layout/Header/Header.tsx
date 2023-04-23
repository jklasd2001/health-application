import Link from 'next/link'
import { FiSettings } from 'react-icons/fi'

import { IconAdornment } from 'src/components'

export const Header = () => {
  return (
    <header className="flex h-[56px] border-b-[1px] border-b-neutral-600 sticky justify-between items-center px-4">
      <Link href="/" className="font-semibold text-xl">
        헬스
      </Link>

      <div>
        <IconAdornment>
          <FiSettings size={24} />
        </IconAdornment>
      </div>
    </header>
  )
}
