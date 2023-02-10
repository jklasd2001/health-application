interface ExerciseTypeProps {
  id: string
  name: string
}

export const ExerciseTypeItem = (exerciseType: ExerciseTypeProps) => {
  const { id, name } = exerciseType
  return <li>{name}</li>
}
