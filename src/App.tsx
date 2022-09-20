import { Header } from './components/Header'
import { Home } from './pages/Home'

export function App() {
  return (
    <div className="px-10 sm:px-16 md:px-28 lg:px-32 xl:px-40">
      <Header />

      <Home />
    </div>
  )
}
