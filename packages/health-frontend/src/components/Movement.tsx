import { useState } from 'react'

import { ListItem, ListItemButton, ListItemText } from '@mui/material'

interface MovementProps {
  id: string
  name: string
  weight: number
  reps: number
  restPeriod: number
  memo: string
}

export const Movement = (movement: MovementProps) => {
  const { id, name, weight, reps, restPeriod, memo } = movement
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <ListItem disablePadding>
      <ListItemButton onclick={console.log('a')}>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  )
}
