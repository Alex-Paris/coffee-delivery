import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'

import cartBorded from '../../../assets/shopping-cart-border.svg'
import { CartContext } from '../../../context/CartContext'
import { formatterValue } from '../../../utils/formatterValue'

import { Tag } from './button/Tag'
import { CoffeeQuantity } from './CoffeeQuantity'

interface Coffee {
  id: number
  title: string
  description: string
  price: number
  urlImage: string
  tags: string[]
}

interface CoffeeItemProps {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const [quantity, setQuantity] = useState(1)

  const { addCartItem } = useContext(CartContext)

  const coffeeValue = formatterValue.format(coffee.price)

  function onPlusQuantity() {
    if (quantity < 99) {
      setQuantity(quantity + 1)
    }
  }

  function onSubtractQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleBuyCoffee() {
    addCartItem(coffee.id, quantity)
    setQuantity(1)
  }

  return (
    <article className="bg-base-card rounded-card flex flex-col items-center justify-center">
      <img
        className="w-32 h-32 top-[-20px] relative"
        src={coffee.urlImage}
        alt=""
      />
      <div className="flex flex-col items-center justify-center p-5 pt-0">
        <div className="flex items-center justify-center gap-1">
          {coffee.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <h6 className="mt-5 font-cursive font-bold text-xl leading-[130%] text-center">
          {coffee.title}
        </h6>
        <p className="mt-2 text-sm leading-[130%] text-center text-base-label">
          {coffee.description}
        </p>
        <div className="w-full mt-8 flex items-center justify-between">
          <p className="font-cursive font-extrabold text-2xl text-right text-base-text">
            <span className="font-sans font-normal text-sm text-left">R$</span>{' '}
            {coffeeValue}
          </p>
          <div className="flex items-center justify-center gap-2">
            <CoffeeQuantity
              quantity={quantity}
              plusQuantity={onPlusQuantity}
              subtractQuantity={onSubtractQuantity}
            />
            <button
              onClick={handleBuyCoffee}
              className="group bg-purple-dark hover:bg-purple transition rounded-md p-2"
            >
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
