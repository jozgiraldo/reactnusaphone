import { createContext, useContext, useState } from 'react'
import { PRODUCTS } from '../data/products'

// Context 3: daftar produk yang bisa diedit (gambar, nama, harga), disimpan di localStorage
const ProductsContext = createContext(null)
const KEY = 'nusaphone-products'

const load = () => {
  try {
    const saved = localStorage.getItem(KEY)
    return saved ? JSON.parse(saved) : PRODUCTS
  } catch {
    return PRODUCTS
  }
}

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(load)

  const updateProduct = (id, patch) => {
    const next = products.map((p) => (p.id === id ? { ...p, ...patch } : p))
    setProducts(next)
    try {
      localStorage.setItem(KEY, JSON.stringify(next))
    } catch {
      // kuota penuh: perubahan tetap berlaku selama halaman terbuka
    }
  }

  return <ProductsContext.Provider value={{ products, updateProduct }}>{children}</ProductsContext.Provider>
}

export function useProducts() {
  const ctx = useContext(ProductsContext)
  if (!ctx) throw new Error('useProducts harus dipakai di dalam ProductsProvider')
  return ctx
}
