import {
  Box,
  FormControl,
  FormHelperText,
  InputAdornment,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface UpdateMovementModalProps {
  open: boolean
  handleOpen: any
  handleClose: any
  id: string
  name: string
  weight: number
  reps: number
  restPeriod: number
  memo: string
}

export const UpdateMovementModal = ({
  open,
  handleOpen,
  handleClose,
  id,
  name,
  weight,
  reps,
  restPeriod,
  memo,
}: UpdateMovementModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          종목생성
        </Typography>
        <div>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <FormHelperText id="outlined-name-helper-text">이름</FormHelperText>
            <OutlinedInput
              id="outlined-adornment-name"
              defaultValue={name}
              aria-describedby="outlined-name-helper-text"
              inputProps={{
                'aria-label': 'name',
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">중량</FormHelperText>
            <OutlinedInput
              id="outlined-adornment-weight"
              defaultValue={weight}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="outlined-reps-helper-text">횟수</FormHelperText>
            <OutlinedInput
              id="outlined-adornment-reps"
              defaultValue={reps}
              endAdornment={<InputAdornment position="end">개</InputAdornment>}
              aria-describedby="outlined-reps-helper-text"
              inputProps={{
                'aria-label': 'reps',
              }}
            />
            <FormHelperText id="outlined-restPeriod-helper-text">쉬는시간</FormHelperText>
            <OutlinedInput
              id="outlined-adornment-restPeriod"
              defaultValue={restPeriod}
              endAdornment={<InputAdornment position="end">초</InputAdornment>}
              aria-describedby="outlined-restPeriod-helper-text"
              inputProps={{
                'aria-label': 'restPeriod',
              }}
            />
            <FormHelperText id="outlined-restPeriod-helper-text">메모</FormHelperText>
            <TextField id="outlined-multiline-static" multiline rows={5} defaultValue={memo} />
          </FormControl>
        </div>
      </Box>
    </Modal>
  )
}