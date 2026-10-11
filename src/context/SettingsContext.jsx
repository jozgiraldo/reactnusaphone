import { createContext, useContext, useState } from 'react'
import { TEXT } from '../data/translations'

// Context 1: pengaturan global (bahasa & tema)
const SettingsContext = createContext(null)

export function SettingsProvider({ children }) {
  const [lang, setLang] = useState('id')
  const [theme, setTheme] = useState('dark')
  const [editMode, setEditMode] = useState(false)

  const value = {
    lang,
    setLang,
    theme,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    editMode,
    toggleEdit: () => setEditMode((e) => !e),
    t: TEXT[lang],
  }

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export function useSettings() {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings harus dipakai di dalam SettingsProvider')
  return ctx
}
