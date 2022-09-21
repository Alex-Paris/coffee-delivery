import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between my-8">
      <img className="h-10" src={logoImg} alt="" />

      <nav className="flex items-center justify-end gap-3">
        <div className="flex items-center gap-1 rounded-md font-normal bg-purple-light text-purple-dark p-2">
          <MapPin size={22} weight="fill" />
          <span>Maringá, PR</span>
        </div>
        <a className="rounded-md bg-yellow-light hover:bg-yellow hover:bg-opacity-50 text-yellow-dark p-2 cursor-pointer">
          <ShoppingCart size={22} weight="fill" />
        </a>
      </nav>
    </header>
  )
}
