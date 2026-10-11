import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SettingsProvider } from './context/SettingsContext'
import { ProductsProvider } from './context/ProductsContext'
import { CartProvider } from './context/CartContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SettingsProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </SettingsProvider>
  </StrictMode>,
)
