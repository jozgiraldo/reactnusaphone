import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'
import { useProducts } from '../context/ProductsContext'
import { CATEGORIES } from '../data/products'
import CategoryFilter from './CategoryFilter'
import ProductCard from './ProductCard'
import ProductEditor from './ProductEditor'

export default function ProductSection() {
  const { t } = useSettings()
  const { products } = useProducts()
  // useState: kategori, pencarian, urutan harga, dan produk yang sedang diedit
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [asc, setAsc] = useState(true)
  const [editing, setEditing] = useState(null)

  const cheapest = Math.min(...products.filter((p) => p.available).map((p) => p.price))
  const visible = products
    .filter((p) => (category === 'all' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => (asc ? a.price - b.price : b.price - a.price))

  return (
    <section id="products" className="section">
      <h2>{t.products}</h2>
      <div className="toolbar">
        <CategoryFilter categories={CATEGORIES} active={category} onChange={setCategory} />
        <button className="chip" onClick={() => setAsc(!asc)}>{asc ? t.sortAsc : t.sortDesc}</button>
        <input className="search" type="search" placeholder={t.search} value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>

      {/* Conditional rendering: grid produk atau pesan kosong */}
      {visible.length > 0 ? (
        <div className="grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} isCheapest={p.price === cheapest} onEdit={setEditing} />
          ))}
        </div>
      ) : (
        <p className="empty">{t.noResult}</p>
      )}

      {editing && <ProductEditor key={editing.id} product={editing} onClose={() => setEditing(null)} />}
    </section>
  )
}
