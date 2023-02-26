import { HTMLAttributes } from 'react'

interface LabelWithInputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string
}

export const LabelWithInput = ({ label, ...props }: LabelWithInputProps) => {
  return (
    <div className="flex flex-col ">
      <label>{label}</label>
      <input {...props} />
    </div>
  )
}
