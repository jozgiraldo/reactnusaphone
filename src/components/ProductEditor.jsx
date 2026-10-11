import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'
import { useProducts } from '../context/ProductsContext'
import { PRODUCTS } from '../data/products'
import { imgSrc, compressImage } from '../utils'

// Props: product, onClose. Mengedit gambar (upload / URL), nama, dan harga produk.
export default function ProductEditor({ product, onClose }) {
  const { t } = useSettings()
  const { updateProduct } = useProducts()
  const [draft, setDraft] = useState({ name: product.name, price: product.price, image: product.image })
  const set = (k, v) => setDraft((d) => ({ ...d, [k]: v }))

  const onFile = async (e) => {
    const file = e.target.files[0]
    if (file) set('image', await compressImage(file))
  }
  const save = () => {
    updateProduct(product.id, { ...draft, name: draft.name.trim() || product.name, price: Number(draft.price) || product.price })
    onClose()
  }
  const original = PRODUCTS.find((p) => p.id === product.id).image

  return (
    <div className="modal-wrap" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{t.editProduct}</h3>
        <div className="thumb">
          {draft.image ? <img src={imgSrc(draft.image)} alt="preview" /> : <span className="thumb-fallback">{draft.name.slice(0, 2).toUpperCase()}</span>}
        </div>
        <label>{t.uploadImage}<input type="file" accept="image/*" onChange={onFile} /></label>
        <label>{t.imageUrl}
          <input value={draft.image && draft.image.startsWith('data:') ? '' : draft.image || ''} placeholder="https://..." onChange={(e) => set('image', e.target.value || null)} />
        </label>
        <label>{t.productName}<input value={draft.name} onChange={(e) => set('name', e.target.value)} /></label>
        <label>{t.price} (Rp)<input type="number" value={draft.price} onChange={(e) => set('price', e.target.value)} /></label>
        <div className="row">
          <button className="btn" onClick={() => set('image', original)}>{t.resetImage}</button>
          <button className="btn" onClick={onClose}>{t.cancel}</button>
          <button className="btn primary" onClick={save}>{t.save}</button>
        </div>
      </div>
    </div>
  )
}
