import { useSettings } from './context/SettingsContext'
import NoticeBar from './components/NoticeBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import WhyChooseUs from './components/WhyChooseUs'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'

export default function App() {
  const { theme } = useSettings()
  return (
    <div className={`app ${theme}`}>
      <NoticeBar />
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <WhyChooseUs />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
