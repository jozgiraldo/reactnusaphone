import { useSettings } from '../context/SettingsContext'

function Feature({ title, desc }) {
  return (
    <div className="feature">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default function WhyChooseUs() {
  const { t } = useSettings()
  return (
    <section id="why" className="section">
      <h2>{t.whyTitle}</h2>
      <div className="features-row">
        <Feature title={t.why1} desc={t.why1d} />
        <Feature title={t.why2} desc={t.why2d} />
        <Feature title={t.why3} desc={t.why3d} />
      </div>
    </section>
  )
}
