import { createContext } from 'react'

const RoutineContext = createContext({
  routines: {},
  setRoutines: () => null,
})

export default RoutineContext
