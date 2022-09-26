import { CheckoutList } from '../../components/CheckoutList'

import { Address } from './components/Address'
import { Payment } from './components/Payment'

export function Checkout() {
  return (
    <main className="grid grid-cols-1 place-items-center xl:place-items-start xl:grid-cols-percent60 py-0 sm:py-7 2xl:py-10 gap-8">
      <div className="w-full max-w-3xl">
        <Address />

        <Payment />
      </div>
      <div className="w-full max-w-3xl row-[1] xl:row-auto">
        <h3 className="w-full font-cursive font-bold leading-adapted text-lg">
          Cafés selecionados
        </h3>
        <CheckoutList />
      </div>
    </main>
  )
}
