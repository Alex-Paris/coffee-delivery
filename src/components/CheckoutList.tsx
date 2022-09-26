import { useContext } from 'react'

import { CartContext } from '../context/CartContext'
import { COFFEES } from '../utils/coffees'
import { formatterValueCurrency } from '../utils/formatterValue'

import { CheckoutItem } from './CheckoutItem'

export function CheckoutList() {
  const { cartItems } = useContext(CartContext)

  let totalValue = 0

  if (cartItems) {
    totalValue = cartItems.reduce(
      (sum, item) => sum + item.quantity * COFFEES[item.itemId - 1].price,
      0,
    )
  }
  const totalValueFormatted = formatterValueCurrency.format(totalValue)

  const totalValueWithDeliverTax = formatterValueCurrency.format(
    totalValue + 3.5,
  )

  return (
    <div className="w-full max-w-3xl bg-base-card rounded-coffeeCard  p-5 sm:p-7 2xl:p-10 mt-4">
      <div className="flex flex-col gap-6">
        {!!cartItems &&
          cartItems.map((item) => (
            <div className="flex flex-col gap-6" key={item.itemId}>
              <CheckoutItem cartItem={item} />
              <hr />
            </div>
          ))}

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-base-text leading-adapted">
              Total de items
            </p>
            <p className="text-base-text leading-adapted">
              {totalValueFormatted}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-base-text leading-adapted">Entrega</p>
            <p className="text-base-text leading-adapted">R$ 3,50</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-base-subtitle leading-adapted">
              Total
            </p>
            <p className="text-xl font-bold text-base-subtitle leading-adapted">
              {totalValueWithDeliverTax}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-yellow rounded-md px-2 py-3 text-sm text-white font-bold leading-[160%] transition hover:bg-yellow-dark"
        >
          CONFIRMAR PEDIDO
        </button>
      </div>
    </div>
  )
}
