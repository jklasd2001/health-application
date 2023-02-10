import { useState } from 'react'

import { ExerciseTypeItem } from 'src/components'
import { useAppContext } from 'src/components/contexts/appcontext'
import exerciseTypeData from 'src/data/exercise-types.data'

export default function ExerciseTypes() {
  const { token } = useAppContext()
  const [exerciseTypes, setExerciseTypes] = useState(exerciseTypeData)
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="Exercisetypes">
      {exerciseTypes.map((exerciseType) => {
        return <ExerciseTypeItem {...exerciseType} key={exerciseType.id} />
      })}
      <button
        onClick={() => {
          setShowModal((toggle) => !toggle)
        }}
      >
        종목생성
      </button>
      {showModal && <div>types</div>}
    </div>
  )
}
