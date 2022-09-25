import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  description: string
}

export function Button({ children, description, ...rest }: ButtonProps) {
  return (
    <button
      className="group w-full flex items-center bg-base-button rounded-md p-4 transition gap-3 hover:bg-base-hover active:bg-purple-light border border-solid active:border-purple"
      {...rest}
    >
      {children}
      <p className="font-sans font-normal text-base-text text-xs uppercase leading-[160%] group-hover:text-base-subtitle">
        {description}
      </p>
    </button>
  )
}
