import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { CartContextProvider } from './context/CartContext'
import { Router } from './Router'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  )
}
