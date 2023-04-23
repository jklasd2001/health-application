import { ButtonHTMLAttributes, memo, useMemo } from 'react'

import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼의 사이즈
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * @default false
   */
  fullWidth?: boolean
}

export const Button = memo(
  ({ size: _size = 'md', fullWidth: _fullWidth, ...props }: ButtonProps) => {
    const size = useMemo(() => {
      const className = {
        sm: 'h-[32px]',
        md: 'h-[40px]',
        lg: 'h-[48px]',
      }[_size]
      return className
    }, [_size])

    const fullWidth = useMemo(() => {
      return classNames({ 'w-full': _fullWidth })
    }, [_fullWidth])

    return (
      <button
        className={classNames(
          ['flex items-center justify-center bg-blue-700 rounded-md active:translate-y-[1px]'],
          size,
          fullWidth,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
