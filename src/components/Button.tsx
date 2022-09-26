import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  description: string
  isActive: boolean
}

export function Button({
  children,
  description,
  isActive,
  ...rest
}: ButtonProps) {
  return (
    <button
      // eslint-disable-next-line prettier/prettier
      className={`group w-full flex items-center rounded-md p-4 transition gap-3 hover:bg-base-hover border border-solid ${!isActive ? 'bg-base-button' : 'bg-purple-light border-purple'}`}
      {...rest}
    >
      {children}
      <p className="font-sans font-normal text-base-text text-xs uppercase leading-[160%] group-hover:text-base-subtitle">
        {description}
      </p>
    </button>
  )
}
