import { Trash } from 'phosphor-react'
import { useContext } from 'react'

import { CartContext, CartItem } from '../context/CartContext'
import { COFFEES } from '../utils/coffees'
import { formatterValueCurrency } from '../utils/formatterValue'

import { CoffeeQuantity } from './CoffeeQuantity'

interface CheckoutItemProps {
  cartItem: CartItem
}

export function CheckoutItem({ cartItem }: CheckoutItemProps) {
  const product = { ...COFFEES[cartItem.itemId - 1], ...cartItem }

  const { addCartItem, removeCartItem } = useContext(CartContext)

  const totalValueFormatted = formatterValueCurrency.format(
    product.quantity * product.price,
  )

  function onAddQuantity() {
    console.log(product.id, product.itemId)
    if (product.quantity < 99) {
      addCartItem(product.id, 1)
    }
  }

  function onSubtractQuantity() {
    if (product.quantity > 1) {
      addCartItem(product.id, -1)
    }
  }

  return (
    <article className="w-full flex justify-between">
      <div className="flex gap-5">
        <img className="w-16 h-16" src={product.urlImage} alt="" />
        <div className="h-full flex flex-col ">
          <p className="flex-1 text-base-subtitle leading-adapted">
            {product.title}
          </p>
          <div className="flex items-center gap-2">
            <CoffeeQuantity
              quantity={product.quantity}
              plusQuantity={onAddQuantity}
              subtractQuantity={onSubtractQuantity}
            />
            <button
              onClick={() => removeCartItem(product.id)}
              className="flex items-center bg-base-button rounded-md text-xs text-base-text leading-[160%] p-2 gap-1 transition hover:bg-base-hover"
            >
              <Trash className="text-purple" size={16} />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <p className="font-bold text-base-text text-right leading-adapted">
        {totalValueFormatted}
      </p>
    </article>
  )
}
