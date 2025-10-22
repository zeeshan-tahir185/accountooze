import React from 'react'
import HeroSection from './components/HeroSection'
import Partners from './components/Partners'
import CoreFeature from './components/CoreFeature'
import SmartAccounting from './components/SmartAccounting'
import AIPowered from './components/AIPowered'
import HowItWorks from './components/HowItWorks'
import SmartSolutions from './components/SmartSolutions'
import FAQs from './components/FAQs'
import Finance from './components/Finance'
import AIMagic from './components/AIMagic'

const page = () => {
  return (
    <div>
      <HeroSection />
      <Partners />
      <CoreFeature />
      <SmartAccounting />
      <AIPowered />
      <HowItWorks />
      <SmartSolutions />
      <FAQs />
      <Finance />
      <AIMagic />
    </div>
  )
}

export default page
