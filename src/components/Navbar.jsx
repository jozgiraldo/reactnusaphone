import { useSettings } from '../context/SettingsContext'
import { useCart } from '../context/CartContext'

// Menggunakan useContext (lewat custom hook) untuk bahasa, tema, dan keranjang
export default function Navbar() {
  const { t, lang, setLang, theme, toggleTheme, editMode, toggleEdit } = useSettings()
  const { items, setDrawerOpen } = useCart()

  return (
    <header className="navbar">
      <a className="brand" href="#home">
        <span className="brand-dot" /> NusaPhone
      </a>
      <nav className="nav-links">
        <a href="#home">{t.home}</a>
        <a href="#products">{t.products}</a>
        <a href="#why">{t.about}</a>
      </nav>
      <div className="nav-actions">
        <button className={editMode ? 'chip active' : 'chip'} onClick={toggleEdit}>✎ {t.editMode}</button>
        <div className="lang-switch">
          {['id', 'en'].map((l) => (
            <button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="icon-btn" onClick={toggleTheme} aria-label="toggle theme">
          {theme === 'dark' ? '☀' : '☾'}
        </button>
        <button className="cart-btn" onClick={() => setDrawerOpen(true)}>
          {t.cart}
          {/* Conditional rendering: badge hanya tampil jika ada isi */}
          {items.length > 0 && <span className="cart-count">{items.length}</span>}
        </button>
      </div>
    </header>
  )
}
