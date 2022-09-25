import { CheckoutList } from '../../components/CheckoutList'

import { Address } from './components/Address'
import { Payment } from './components/Payment'

export function Checkout() {
  return (
    <main className="grid grid-cols-percent60 py-10 gap-8">
      <div className="flex flex-col">
        <Address />

        <Payment />
      </div>
      <div>
        <h3 className="w-full font-cursive font-bold leading-adapted text-lg">
          Cafés selecionados
        </h3>
        <CheckoutList />
      </div>
    </main>
  )
}
