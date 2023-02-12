import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex gap-10">
      <Link href={'movement-list'}>movement</Link>
    </div>
  )
}

export default Header
