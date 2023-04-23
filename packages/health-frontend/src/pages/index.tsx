import { memo } from 'react'

import { Button, Routine, RoutineCardList } from 'src/components'

const ROUTINES = [
  {
    routineId: '1',
    routineName: '테스트1',
    description: '설명',
  },
] as Routine[]

const Home = memo(() => {
  return (
    <div>
      <div className="text-lg">내 루틴 목록</div>
      <RoutineCardList routines={ROUTINES} />
      <Button fullWidth={true} size="lg">
        운동 시작
      </Button>
    </div>
  )
})

Home.displayName = 'Home'

export default Home
