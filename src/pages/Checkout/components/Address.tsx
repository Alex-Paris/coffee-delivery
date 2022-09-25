import { MapPinLine } from 'phosphor-react'

import { Input } from '../../../components/Input'

export function Address() {
  return (
    <section id="address" className="flex flex-col items-start">
      <h3 className="font-cursive font-bold leading-adapted text-lg">
        Complete seu pedido
      </h3>

      <div className="bg-base-card rounded-md p-10 mt-4">
        <div className="flex mb-8 gap-3">
          <MapPinLine className="text-yellow-dark" size={22} />
          <div>
            <p className="text-base-subtitle leading-adapted">
              Endereço de entrega
            </p>
            <p className="text-sm text-base-text leading-adapted">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>

        <form className="flex flex-col gap-4" action="">
          <Input containerStyle={['w-52']} name="cep" placeholder="CEP" />
          <Input name="street" placeholder="Rua" />
          <div className="flex gap-3">
            <Input
              containerStyle={['w-52']}
              name="number"
              placeholder="Número"
            />
            <Input
              containerStyle={['flex-1']}
              name="complement"
              placeholder="Complemento"
              optional
            />
          </div>
          <div className="flex gap-3">
            <Input
              containerStyle={['w-52']}
              name="district"
              placeholder="Bairro"
            />
            <Input
              containerStyle={['flex-1']}
              name="city"
              placeholder="Cidade"
            />
            <Input
              containerStyle={['w-[3.75rem]']}
              name="uf"
              placeholder="UF"
            />
          </div>
        </form>
      </div>
    </section>
  )
}
