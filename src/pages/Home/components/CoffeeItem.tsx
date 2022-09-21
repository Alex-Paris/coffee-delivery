import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import cartBorded from '../../../assets/shopping-cart-border.svg'

export function CoffeeItem() {
  return (
    <article className="bg-base-card rounded-card flex flex-col items-center justify-center">
      <img
        className="w-32 h-32 top-[-20px] relative"
        src="/products/coffee-1.svg"
        alt=""
      />
      <div className="flex flex-col items-center justify-center p-5 pt-0">
        <button className="bg-yellow-light text-yellow-dark font-bold text-[0.625rem] px-2 py-1 rounded-[100px]">
          TRADICIONAL
        </button>
        <h6 className="mt-5 font-cursive font-bold text-xl leading-[130%] text-center">
          Expresso Tradicional
        </h6>
        <p className="mt-2 text-sm leading-[130%] text-center text-base-label">
          O tradicional café feito com água quente e grãos moídos
        </p>
        <div className="w-full mt-8 flex items-center justify-between">
          <p className="font-cursive font-extrabold text-2xl text-right text-base-text">
            <span className="font-sans font-normal text-sm text-left">R$</span>{' '}
            9,92
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center bg-base-button rounded-md p-2 gap-1">
              <button>
                <Minus
                  className="text-purple hover:text-purple-dark"
                  weight="bold"
                  size={14}
                />
              </button>
              <span className="w-5 text-base-title text-center text-base font-normal leading-[130%]">
                08
              </span>
              <button>
                <Plus
                  className="text-purple hover:text-purple-dark"
                  weight="bold"
                  size={14}
                />
              </button>
            </div>
            <button className="group bg-purple-dark hover:bg-purple rounded-md p-2">
              <ShoppingCartSimple
                className="w-[1.375rem] h-[1.375rem] text-base-card group-hover:hidden"
                weight="fill"
              />
              <img
                className="hidden w-[1.375rem] h-[1.375rem] group-hover:flex"
                src={cartBorded}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
