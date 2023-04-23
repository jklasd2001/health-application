import { ButtonHTMLAttributes, forwardRef, memo } from 'react'

import classNames from 'classnames'

type IconAdornmentProps = ButtonHTMLAttributes<HTMLButtonElement>

const _IconAdornment = forwardRef<HTMLButtonElement, IconAdornmentProps>(({ ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={classNames(
        'inline-flex items-center justify-center cursor-pointer bg-transparent active:translate-y-[1px]',
      )}
      {...rest}
    />
  )
})

_IconAdornment.displayName = 'IconAdornment'

export const IconAdornment = memo(_IconAdornment)
