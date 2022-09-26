import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="flex justify-center px-5 sm:px-16 md:px-28 lg:px-32 xl:px-40">
      <div className="flex-1 max-w-screen-xl">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
