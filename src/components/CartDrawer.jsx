import { useState } from 'react'
import { useSettings } from '../context/SettingsContext'
import { useCart } from '../context/CartContext'
import { rupiah } from '../utils'
import CheckoutModal from './CheckoutModal'

export default function CartDrawer() {
  const { t } = useSettings()
  const { items, removeItem, subtotal, discount, total, promoApplied, applyPromo, drawerOpen, setDrawerOpen } = useCart()
  const [code, setCode] = useState('')
  const [promoMsg, setPromoMsg] = useState('')
  const [checkingOut, setCheckingOut] = useState(false)

  if (!drawerOpen) return null

  const handleApply = () => {
    setPromoMsg(applyPromo(code) ? t.promoOk : t.promoBad)
  }

  return (
    <>
      <div className="overlay" onClick={() => setDrawerOpen(false)} />
      <aside className="drawer">
        <div className="drawer-head">
          <h3>{t.cart}</h3>
          <button className="icon-btn" onClick={() => setDrawerOpen(false)}>✕</button>
        </div>

        {items.length === 0 ? (
          <p className="empty">{t.emptyCart}</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((p) => (
                <li key={p.id}>
                  <div>
                    <strong>{p.name}</strong>
                    <span>{rupiah(p.price)}</span>
                  </div>
                  <button className="link" onClick={() => removeItem(p.id)}>{t.remove}</button>
                </li>
              ))}
            </ul>

            <div className="promo">
              <input value={code} onChange={(e) => setCode(e.target.value)} placeholder={t.promoPlaceholder} />
              <button className="btn" onClick={handleApply}>{t.apply}</button>
            </div>
            {promoMsg && <p className={promoApplied ? 'ok' : 'err'}>{promoMsg}</p>}

            <dl className="summary">
              <div><dt>{t.subtotal}</dt><dd>{rupiah(subtotal)}</dd></div>
              {promoApplied && <div><dt>{t.discount}</dt><dd>- {rupiah(discount)}</dd></div>}
              <div className="total"><dt>{t.total}</dt><dd>{rupiah(total)}</dd></div>
            </dl>
            <button className="btn primary full" onClick={() => setCheckingOut(true)}>{t.checkout}</button>
          </>
        )}
      </aside>

      {checkingOut && <CheckoutModal onClose={() => setCheckingOut(false)} />}
    </>
  )
}
