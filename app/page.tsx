import { AnnouncementBar } from '@/components/sections/AnnouncementBar'
import { Features } from '@/components/sections/Features'
import { Hero } from '@/components/sections/Hero'
import { ProductConfigurator } from '@/components/sections/ProductConfigurator'
import { ProductDetails } from '@/components/sections/ProductDetails'
import { ScrollStory } from '@/components/sections/ScrollStory'
import { FAQ } from '@/components/sections/FAQ'
import { Newsletter } from '@/components/sections/Newsletter'
import { Footer } from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main className="flex flex-col bg-white">
      <AnnouncementBar />
      <Hero />
      <Features />
      <ScrollStory />
      <ProductConfigurator />
      <ProductDetails />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}
