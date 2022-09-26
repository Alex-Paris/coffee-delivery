import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import deliverImg from '../../assets/delivery-guy.svg'

export function Success() {
  return (
    <main>
      <div className="pt-20">
        <h1 className="font-cursive font-extrabold text-3xl text-yellow-dark leading-adapted">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-2xl text-base-subtitle leading-adapted">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>
      <div className="flex items-end justify-between mt-10 gap-24">
        <div className="w-full border border-solid rounded-card bg-gradient-to-r from-[#7928ca] to-[#ff0080] p-[1px]">
          <div className="flex flex-col bg-background rounded-inside-card p-10 gap-8">
            <div className="flex items-center gap-3">
              <span className="bg-purple rounded-full p-2">
                <MapPin size={16} weight="fill" className="text-background" />
              </span>
              <div>
                <p className="text-base-text leading-adapted">
                  Entrega em{' '}
                  <span className="font-bold">
                    Rua João Daniel Martinelli, 102
                  </span>
                  <br /> Farrapos - Porto Alegre, RS
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-yellow rounded-full p-2">
                <Timer size={16} weight="fill" className="text-background" />
              </span>
              <div>
                <p className="text-base-text leading-adapted">
                  Previsão de entrega
                  <br />
                  <span className="font-bold">20 min - 30 min</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-yellow-dark rounded-full p-2">
                <CurrencyDollar
                  size={16}
                  weight="fill"
                  className="text-background"
                />
              </span>
              <div>
                <p className="text-base-text leading-adapted">
                  Pagamento na entrega
                  <br />
                  <span className="font-bold">Cartão de Crédito</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={deliverImg} alt="" />
      </div>
    </main>
  )
}
