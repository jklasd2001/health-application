import { createContext } from 'react'

const ExerciseTypeContext = createContext({
  exerciseTypes: {},
  setExerciseTypes: () => null,
})

export default ExerciseTypeContext
