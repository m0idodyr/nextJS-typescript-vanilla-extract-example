import AboutSection from '../components/AboutSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import FeaturesSection from '../components/FeaturesSection'
import HeroSection from '../components/HeroSection'
//import OurworkSection from '../components/OurWorkSection'
import ReferencesSection from '../components/ReferencesSection'
//import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        {/*<OurWorkSection />*/}
        <ReferencesSection />
        <AboutSection />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  )
}
