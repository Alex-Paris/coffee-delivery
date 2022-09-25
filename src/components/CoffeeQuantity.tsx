import { Minus, Plus } from 'phosphor-react'

interface CoffeeQuantityProps {
  quantity: number
  plusQuantity: () => void
  subtractQuantity: () => void
}

export function CoffeeQuantity({
  quantity,
  plusQuantity,
  subtractQuantity,
}: CoffeeQuantityProps) {
  return (
    <div className="flex items-center justify-center bg-base-button rounded-md p-2 gap-1">
      <button onClick={subtractQuantity}>
        <Minus
          className="text-purple transition hover:text-purple-dark"
          weight="bold"
          size={14}
        />
      </button>
      <span className="w-5 text-base-title text-center text-base font-normal leading-[130%]">
        {quantity}
      </span>
      <button onClick={plusQuantity}>
        <Plus
          className="text-purple transition hover:text-purple-dark"
          weight="bold"
          size={14}
        />
      </button>
    </div>
  )
}
