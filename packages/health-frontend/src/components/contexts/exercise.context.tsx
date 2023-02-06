import { createContext } from 'react'

const ExerciseContext = createContext({
  exercises: {},
  setExercises: () => null,
})

export default ExerciseContext
