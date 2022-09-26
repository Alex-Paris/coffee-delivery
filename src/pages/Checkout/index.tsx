import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import zod from 'zod'

import { CheckoutList } from '../../components/CheckoutList'

import { Address } from './components/Address'
import { Payment } from './components/Payment'

const formValidationSchema = zod.object({
  cep: zod.string().min(7, 'Informe o CEP').max(9, 'Informe o CEP'),
  street: zod.string().min(3, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(2, 'Informe a UF').max(2, 'Informe a UF'),
})

type FormData = zod.infer<typeof formValidationSchema>

export function Checkout() {
  const addressForm = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      street: '',
    },
  })

  const { handleSubmit } = addressForm

  function onSubmit() {
    alert('oi')
  }

  return (
    <main>
      <form
        className="grid grid-cols-1 place-items-center xl:place-items-start xl:grid-cols-percent60 py-0 sm:py-7 2xl:py-10 gap-8"
        onSubmit={handleSubmit(onSubmit)}
        action=""
      >
        <FormProvider {...addressForm}>
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
        </FormProvider>
      </form>
    </main>
  )
}
