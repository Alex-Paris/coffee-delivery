import { Trash } from 'phosphor-react'

import { CoffeeQuantity } from './CoffeeQuantity'

export function CheckoutItem() {
  return (
    <article className="flex justify-between">
      <div className="flex gap-5">
        <img className="w-16 h-16" src="/products/coffee-2.svg" alt="" />
        <div className="h-full flex flex-col ">
          <p className="flex-1 text-base-subtitle leading-adapted">
            Expresso Tradicional
          </p>
          <div className="flex items-center gap-2">
            <CoffeeQuantity
              quantity={2}
              plusQuantity={() => {
                const d = true
              }}
              subtractQuantity={() => {
                const d = true
              }}
            />
            <button className="flex items-center bg-base-button rounded-md text-xs text-base-text leading-[160%] p-2 gap-1 transition hover:bg-base-hover">
              <Trash className="text-purple" size={16} />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <p className="font-bold text-base-text leading-adapted">R$ 1,99</p>
    </article>
  )
}
