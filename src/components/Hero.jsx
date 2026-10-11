import { useSettings } from '../context/SettingsContext'

export default function Hero() {
  const { t } = useSettings()
  return (
    <section
      id="home"
      className="hero"
      style={{ '--hero-img': `url(${import.meta.env.BASE_URL}images/hero-bg.jpg)` }}
    >
      <div className="hero-content">
        <p className="eyebrow">NUSAPHONE · {t.heroTag}</p>
        <h1>{t.heroTitle}</h1>
        <p className="hero-desc">{t.heroDesc}</p>
        <a className="btn primary" href="#products">{t.browse}</a>
        <ul className="pills">
          <li>QRIS</li>
          <li>Garansi resmi</li>
          <li>Cicilan 0%</li>
        </ul>
      </div>
    </section>
  )
}