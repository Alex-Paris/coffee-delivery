import { MapPinLine } from 'phosphor-react'

import { Input } from '../../../components/Input'

export function Address() {
  return (
    <section id="address" className="w-full flex flex-col items-start">
      <h3 className="w-full font-cursive font-bold leading-adapted text-lg">
        Complete seu pedido
      </h3>

      <div className="w-full max-w-3xl bg-base-card rounded-md p-5 sm:p-7 2xl:p-10 mt-4">
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

        <div className="flex flex-col gap-1">
          <Input
            containerStyle=/*tw*/"w-52"
            id="cep"
            placeholder="CEP"
            type="text"
            formId="cep"
          />
          <Input id="street" placeholder="Rua" type="text" formId="street" />
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              containerStyle=/*tw*/"w-full sm:w-52"
              id="number"
              placeholder="Número"
              type="text"
              formId="number"
            />
            <Input
              containerStyle=/*tw*/"w-full"
              id="complement"
              placeholder="Complemento"
              optional
              type="text"
              formId="complement"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              containerStyle=/*tw*/"w-full sm:w-52"
              id="district"
              placeholder="Bairro"
              type="text"
              formId="district"
            />
            <div className="flex flex-row flex-1 gap-3">
              <Input
                containerStyle=/*tw*/"w-full"
                id="city"
                placeholder="Cidade"
                type="text"
                formId="city"
              />
              <Input
                containerStyle=/*tw*/"w-[3.75rem]"
                id="uf"
                placeholder="UF"
                type="text"
                formId="uf"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
