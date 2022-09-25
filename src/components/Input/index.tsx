import { InputHTMLAttributes } from 'react'

import { styleClasses } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: string[]
  optional?: boolean
}

export function Input({ containerStyle = [], optional, ...rest }: InputProps) {
  return (
    <div className={styleClasses.div(containerStyle)}>
      <input type="text" className={styleClasses.input} {...rest} />
      {optional && <p className={styleClasses.p}>Opcional</p>}
    </div>
  )
}
