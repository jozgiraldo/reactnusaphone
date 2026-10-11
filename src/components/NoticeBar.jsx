import { useSettings } from '../context/SettingsContext'

// Component sederhana: banner pengumuman berjalan
export default function NoticeBar() {
  const { t } = useSettings()
  return (
    <div className="notice">
      <span>{t.notice}</span>
    </div>
  )
}
