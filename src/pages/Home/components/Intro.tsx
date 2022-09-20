import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Intro() {
  return (
    <div className="flex items-start justify-between py-24 gap-14">
      <div>
        <div className="flex">
          <div>
            <h1 className="font-cursive font-extrabold text-3xl lg:text-4xl xl:text-5xl leading-[130%] text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="font-normal text-xl text-base-subtitle leading-[130%] mt-4">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <img
            className="w-80 absolute opacity-30 right-8 sm:w-96 sm:right-40 md:right-52 lg:opacity-100 lg:right-0 lg:relative xl:hidden"
            src="/coffee-logo.svg"
            alt=""
          />
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-fill text-base-text mt-16 gap-5">
          <div className="flex items-center gap-3 text-base">
            <span className="bg-yellow-dark rounded-full p-2">
              <ShoppingCart color="#fafafa" weight="fill" />
            </span>
            Compra simples e segura
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-base-text rounded-full p-2">
              <Package color="#fafafa" weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-yellow rounded-full p-2">
              <Timer color="#fafafa" weight="fill" />
            </span>
            Entrega rápida e rastreada
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-purple rounded-full p-2">
              <Coffee color="#fafafa" weight="fill" />
            </span>
            O café chega fresquinho até você
          </div>
        </div>
      </div>
      <img
        className="hidden xl:flex xl:w-[476px]"
        src="/coffee-logo.svg"
        alt=""
      />
    </div>
  )
}
