import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="px-10 sm:px-16 md:px-28 lg:px-32 xl:px-40">
      <Header />
      <Outlet />
    </div>
  )
}
