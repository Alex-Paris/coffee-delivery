import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between my-8">
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
          className="rounded-md bg-yellow-light hover:bg-yellow hover:bg-opacity-50 transition text-yellow-dark p-2 cursor-pointer"
        >
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </header>
  )
}
