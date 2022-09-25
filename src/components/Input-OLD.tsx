import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: string
  optional?: boolean
}

export function Input({ containerStyle = '', optional, ...rest }: InputProps) {
  return (
    <div
      className={
        'p-3 flex items-center justify-between bg-base-input border-base-button border border-solid rounded focus-within:border focus-within:border-solid focus-within:border-yellow-dark' +
        containerStyle
      }
    >
      <input
        type="text"
        className="peer min-w-0 bg-inherit flex-1 outline-none font-sans font-normal text-sm text-base-text placeholder:text-base-label leading-adapted"
        {...rest}
      />
      {optional && (
        <p className="hidden peer-placeholder-shown:flex font-sans font-normal text-xs text-base-label leading-adapted select-none italic">
          Opcional
        </p>
      )}
    </div>
  )
}
