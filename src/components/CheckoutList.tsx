import { CheckoutItem } from './CheckoutItem'

export function CheckoutList() {
  return (
    <div className="w-full max-w-3xl bg-base-card rounded-coffeeCard  p-5 sm:p-7 2xl:p-10 mt-4">
      <div className="flex flex-col gap-6">
        <CheckoutItem />
        <hr />

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-base-text leading-adapted">
              Total de items
            </p>
            <p className="text-base-text leading-adapted">R$ 29,90</p>
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
              R$ 33,20
            </p>
          </div>
        </div>

        <button className="bg-yellow rounded-md px-2 py-3 text-sm text-white font-bold leading-[160%] transition hover:bg-yellow-dark">
          CONFIRMAR PEDIDO
        </button>
      </div>
    </div>
  )
}
