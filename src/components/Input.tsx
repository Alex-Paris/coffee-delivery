import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: string
  optional?: boolean
  formId: string
}

export function Input({
  containerStyle = '',
  optional,
  formId,
  ...rest
}: InputProps) {
  const { register, formState } = useFormContext()

  const errorMessage = formState.errors[formId]?.message

  return (
    <div className={`flex flex-col h-14 ${containerStyle}`}>
      <div className="p-3 flex items-center justify-between bg-base-input border-base-button border border-solid rounded focus-within:border focus-within:border-solid focus-within:border-yellow-dark">
        <input
          className="peer min-w-0 bg-inherit flex-1 outline-none font-sans font-normal text-sm leading-adapted text-base-text placeholder:text-base-label"
          {...rest}
          {...register(formId)}
        />
        {optional && (
          <p className="hidden font-sans font-normal text-xs text-base-label italic leading-adapted select-none peer-placeholder-shown:flex">
            Opcional
          </p>
        )}
      </div>
      <p className="text-xs italic leading-3 text-base-label">
        {errorMessage && `* ${errorMessage.toString()} *`}
      </p>
    </div>
  )
}
