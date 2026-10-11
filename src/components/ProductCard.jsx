import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'
import { useCart } from '../context/CartContext'
import { rupiah, imgSrc } from '../utils'

// Props: product, isCheapest, onEdit (dikirim dari ProductSection)
export default function ProductCard({ product, isCheapest, onEdit }) {
  const { t, editMode } = useSettings()
  const { items, addItem } = useCart()
  const inCart = items.some((p) => p.id === product.id)
  // useState: simpan sumber gambar yang gagal dimuat agar tampil placeholder
  const [failedSrc, setFailedSrc] = useState(null)
  const showImage = product.image && failedSrc !== product.image

  // Conditional rendering untuk label tombol
  let buttonLabel = t.buy
  if (!product.available) buttonLabel = t.soldOut
  else if (inCart) buttonLabel = t.inCart
  const badge = isCheapest ? t.cheapest : product.badge

  return (
    <article className={product.available ? 'card' : 'card disabled'}>
      {/* Conditional rendering: gambar produk atau placeholder */}
      <div className="thumb">
        {showImage ? (
          <img src={imgSrc(product.image)} alt={product.name} loading="lazy" onError={() => setFailedSrc(product.image)} />
        ) : (
          <span className="thumb-fallback">{product.name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <div className="card-top">
        <span className="tag">{t[product.category]}</span>
        {badge && <span className="badge">{badge}</span>}
      </div>
      <h3>{product.name}</h3>
      <p className="meta">{product.specs}</p>
      <ul className="features">
        {product.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      {/* Conditional rendering: tombol edit hanya tampil di mode edit */}
      {editMode && <button className="btn" onClick={() => onEdit(product)}>✎ {t.edit}</button>}
      <div className="card-bottom">
        <strong className="price">{rupiah(product.price)}</strong>
        <button className="btn primary" disabled={!product.available || inCart} onClick={() => addItem(product)}>
          {buttonLabel}
        </button>
      </div>
    </article>
  )
}
