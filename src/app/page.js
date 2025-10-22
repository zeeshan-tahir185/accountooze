import React from 'react'
import HeroSection from './components/HeroSection'
import Partners from './components/Partners'
import CoreFeature from './components/CoreFeature'
import SmartAccounting from './components/SmartAccounting'
import AIPowered from './components/AIPowered'
import HowItWorks from './components/HowItWorks'

const page = () => {
  return (
    <div>
      <HeroSection />
      <Partners />
      <CoreFeature />
      <SmartAccounting />
      <AIPowered />
      <HowItWorks />
    </div>
  )
}

export default page
