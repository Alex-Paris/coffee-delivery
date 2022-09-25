import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

import { Button } from '../../../components/Button'

export function Payment() {
  return (
    <section id="payment" className="w-full flex flex-col items-start">
      <div className="w-full bg-base-card rounded-md p-10 mt-3">
        <div className="flex mb-8 gap-3">
          <CurrencyDollar className="text-purple" size={22} />
          <div>
            <p className="text-base-subtitle leading-adapted">Pagamento</p>
            <p className="text-sm text-base-text leading-adapted">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Button description="CARTÃO DE CRÉDITO">
            <CreditCard className="text-purple" size={16} />
          </Button>
          <Button description="CARTÃO DE DÉBITO">
            <Bank className="text-purple" size={16} />
          </Button>
          <Button description="DINHEIRO">
            <Money className="text-purple" size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
