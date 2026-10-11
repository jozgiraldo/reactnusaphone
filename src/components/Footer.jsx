import { useSettings } from '../context/SettingsContext'

export default function Footer() {
  const { t } = useSettings()
  return (
    <footer className="footer">
      <p>© 2026 NusaPhone. {t.footer}</p>
    </footer>
  )
}
