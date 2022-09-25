import { twStyle } from '../../utils/twStyle'

export const styleClasses = {
  div: (containerStyle: string[]) =>
    twStyle([
      'p-3',
      'flex',
      'items-center',
      'justify-between',
      'bg-base-input',
      'border-base-button',
      'border',
      'border-solid',
      'rounded',
      'focus-within:border',
      'focus-within:border-solid',
      'focus-within:border-yellow-dark',
      ...containerStyle,
    ]),

  input: twStyle([
    'peer',
    'min-w-0',
    'bg-inherit',
    'flex-1',
    'outline-none',
    'font-sans',
    'font-normal',
    'text-sm',
    'leading-adapted',
    'text-base-text',
    'placeholder:text-base-label',
  ]),

  p: twStyle([
    'hidden',
    'font-sans',
    'font-normal',
    'text-xs',
    'text-base-label',
    'italic',
    'leading-adapted',
    'select-none',
    'peer-placeholder-shown:flex',
  ]),
}
