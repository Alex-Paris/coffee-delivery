import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCallback, useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import logoImg from '../assets/logo.svg'
import { CartContext } from '../context/CartContext'

export function Header() {
  const [windowScroll, setWindowScroll] = useState(false)

  const { cartItems } = useContext(CartContext)

  const handleScroll = useCallback(() => {
    if (scrollY > 90) {
      setWindowScroll(true)
      return
    }
    setWindowScroll(false)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const cartItemsAmount = cartItems.length

  return (
    <header
      // eslint-disable-next-line prettier/prettier
      className={`bg-background z-[100] fixed w-full left-0 px-5 sm:px-16 md:px-28 lg:px-32 xl:px-40 flex items-center justify-center ${windowScroll && 'shadow-sm'}`}
    >
      <div className="flex-1 max-w-screen-xl flex items-center justify-between my-8">
        <NavLink to="/" title="home">
          <img className="h-10" src={logoImg} alt="" />
        </NavLink>

        <nav className="flex items-center justify-end gap-3">
          <div className="flex items-center gap-1 rounded-md font-normal bg-purple-light text-purple-dark p-2">
            <MapPin size={22} weight="fill" />
            <span>Maringá, PR</span>
          </div>
          <NavLink
            to="/checkout"
            title="checkout"
            className="relative rounded-md bg-yellow-light hover:bg-yellow hover:bg-opacity-50 transition text-yellow-dark p-2 cursor-pointer"
          >
            <ShoppingCart size={22} weight="fill" />
            {cartItemsAmount > 0 && (
              <span className="-top-1/4 -right-1/4 absolute flex items-center justify-center w-5 h-5 bg-yellow-dark rounded-full font-bold text-xs text-white leading-adapted">
                {cartItemsAmount}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
