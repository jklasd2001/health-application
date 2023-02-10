import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex gap-10">
      <Link href={'exercise-types'}>Exercise Type</Link>
      <Link href={'exercise'}>Exercise</Link>
      <Link href={'routines'}>Routines</Link>
      <Link href={'exercise'}>Exercise Registration</Link>
    </div>
  )
}

export default Header
