import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import SocialProof from '@/components/SocialProof'
import MarqueeSection from '@/components/MarqueeSection'
import WhySection from '@/components/WhySection'
import GrowSection from '@/components/GrowSection'
import HowItWorks from '@/components/HowItWorks'
import WhyFollowersImportant from '@/components/WhyFollowersImportant'
import WhyChooseUs from '@/components/WhyChooseUs'
import PrivacySection from '@/components/PrivacySection'
import ActiveFollowers from '@/components/ActiveFollowers'
import Footer from '@/components/Footer'
import BenefitsSection from '@/components/BenefitsSection'
import FAQSection from '@/components/FAQSection'

function Home() {
  return (
    <>
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <MarqueeSection />
      <WhySection />
      <GrowSection />
      <HowItWorks />
      <WhyFollowersImportant />
      <WhyChooseUs />
      <PrivacySection />
      <ActiveFollowers />
      <BenefitsSection />
      <FAQSection />
      <Footer />
    </div>
    </>
  )
}

export default Home
