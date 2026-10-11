import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'
import { useCart } from '../context/CartContext'
import { rupiah } from '../utils'

// Props: onClose (fungsi callback) dikirim dari CartDrawer
export default function CheckoutModal({ onClose }) {
  const { t } = useSettings()
  const { total, clearCart, setDrawerOpen } = useCart()
  const [form, setForm] = useState({ name: '', email: '' })
  const [error, setError] = useState('')
  const [orderId, setOrderId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) {
      setError(t.required)
      return
    }
    setOrderId('NP-' + Math.random().toString(36).slice(2, 8).toUpperCase())
  }

  const finish = () => {
    clearCart()
    setDrawerOpen(false)
    onClose()
  }

  return (
    <div className="modal-wrap">
      <div className="modal">
        {/* Conditional rendering: form checkout atau layar sukses */}
        {orderId ? (
          <div className="success">
            <div className="check">✓</div>
            <h3>{t.success}</h3>
            <p>{t.successDesc}</p>
            <p className="order">{t.orderId}: <strong>{orderId}</strong></p>
            <button className="btn primary full" onClick={finish}>{t.close}</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>{t.checkout}</h3>
            <label>{t.name}
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label>{t.email}
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </label>
            {error && <p className="err">{error}</p>}
            <p className="pay-total">{t.total}: <strong>{rupiah(total)}</strong></p>
            <div className="row">
              <button type="button" className="btn" onClick={onClose}>{t.cancel}</button>
              <button type="submit" className="btn primary">{t.pay}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
