import { useState } from 'react'

import { Button, List } from '@mui/material'

import { Movement } from 'src/components'
import { useAppContext } from 'src/components/contexts/appcontext'
import { CreateMovementModal } from 'src/components/CreateMovementModal'
import movementsData from 'src/data/movements.data'

const MovementList = () => {
  const { token } = useAppContext()
  const [movements, setMovements] = useState(movementsData)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <List>
        <div className="movements">
          {movements.map((movement) => {
            return <Movement {...movement} key={movement.id} />
          })}
        </div>
      </List>
      <Button onClick={handleOpen}>종목 생성</Button>
      <CreateMovementModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
    </div>
  )
}

export default MovementList
