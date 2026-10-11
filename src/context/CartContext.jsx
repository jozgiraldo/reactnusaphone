import { createContext, useContext, useState } from 'react'

// Context 2: keranjang belanja & kode promo
const CartContext = createContext(null)
const PROMO_CODE = 'PROMO10'
const PROMO_RATE = 0.10

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [promoApplied, setPromoApplied] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const addItem = (product) => {
    setItems((prev) => (prev.some((p) => p.id === product.id) ? prev : [...prev, product]))
  }
  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id))
  const clearCart = () => {
    setItems([])
    setPromoApplied(false)
  }
  const applyPromo = (code) => {
    const ok = code.trim().toUpperCase() === PROMO_CODE
    setPromoApplied(ok)
    return ok
  }

  const subtotal = items.reduce((sum, p) => sum + p.price, 0)
  const discount = promoApplied ? Math.round(subtotal * PROMO_RATE) : 0

  const value = {
    items,
    addItem,
    removeItem,
    clearCart,
    applyPromo,
    promoApplied,
    subtotal,
    discount,
    total: subtotal - discount,
    drawerOpen,
    setDrawerOpen,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart harus dipakai di dalam CartProvider')
  return ctx
}
