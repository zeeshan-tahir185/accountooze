import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 md:px-[90px] flex flex-col gap-3 md:gap-[33px] pt-3 pb-2 md:pb-[80px]'>
      <p className='text-xl text-center text-[#1F1F20] '>Trusted by 180,000+ customers world wide</p>
      <div className='flex flex-col sm:flex-row flex-wrap items-center justify-between  lg:w-[90%] mx-auto gap-4 md:gap-2'>
        <Image src="/images/partner1.svg" alt='partner logo' width={147} height={33} />
        <Image src="/images/partner2.svg" alt='partner logo' width={177} height={31} />
        <Image src="/images/partner3.svg" alt='partner logo' width={180} height={33} />
        <Image src="/images/partner4.svg" alt='partner logo' width={129} height={28} />
        <Image src="/images/partner5.svg" alt='partner logo' width={153} height={33} />
      </div>
    </div>
  )
}

export default Partners
