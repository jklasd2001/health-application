import { memo, useCallback } from 'react'

import { useRouter } from 'next/router'
import { FiMoreVertical } from 'react-icons/fi'

import { IconAdornment } from 'src/components'

import { Routine } from './helpers'

interface RoutineCardProps {
  routine: Routine
}

export const RoutineCard = memo(({ routine }: RoutineCardProps) => {
  const router = useRouter()

  const handleButtonClick = useCallback(() => {
    router.push('/routine')
  }, [])

  return (
    <button
      className="flex items-center justify-between rounded-lg bg-neutral-600 p-4 w-full hover:opacity-80"
      onClick={handleButtonClick}
    >
      <div>
        <div>{routine.routineName}</div>
        <div>{routine.description}</div>
      </div>

      <IconAdornment>
        <FiMoreVertical size={24} />
      </IconAdornment>
    </button>
  )
})

RoutineCard.displayName = 'RoutineCard'
