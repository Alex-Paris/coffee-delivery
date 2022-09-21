import { CoffeeItem } from './CoffeeItem'

export function CoffeeList() {
  return (
    <section id="coffee-list" className="pt-8">
      <div className="flex items-center justify-between">
        <h2 className="font-cursive font-extrabold text-2xl lg:text-3xl leading-[130%] text-base-title">
          Nossos cafés
        </h2>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 lg:gap-x-8 xl:gap-x-4 2xl:gap-x-8 gap-y-10">
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
        <CoffeeItem />
      </div>
    </section>
  )
}
