import { useSettings } from '../context/SettingsContext'

// Props: categories, active, onChange dikirim dari komponen induk (ProductSection)
export default function CategoryFilter({ categories, active, onChange }) {
  const { t } = useSettings()
  return (
    <div className="filters">
      {categories.map((c) => (
        <button key={c} className={active === c ? 'chip active' : 'chip'} onClick={() => onChange(c)}>
          {t[c]}
        </button>
      ))}
    </div>
  )
}
