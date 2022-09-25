import { Address } from './components/Address'
import { Payment } from './components/Payment'

export function Checkout() {
  return (
    <main className="py-10">
      <Address />

      <Payment />
    </main>
  )
}
