import { memo } from 'react'

import { Routine } from './helpers'
import { RoutineCard } from './RoutineCard'

interface RoutineCardListProps {
  routines: Routine[]
}

export const RoutineCardList = memo(({ routines }: RoutineCardListProps) => {
  return (
    <div>
      {routines.map((routine) => (
        <RoutineCard key={routine.routineId} routine={routine} />
      ))}
    </div>
  )
})

RoutineCardList.displayName = 'RoutineCardList'
