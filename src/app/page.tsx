'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
} from 'lucide-react'
import Link from 'next/link'
import { Suspense, useState } from 'react'
import Image from 'next/image'

const perks = [
  {
    name: 'Instant Product Visualization',
    Icon: '/images/fIcon1.svg',
    description:
      'Users can instantly view products in 3D upon browsing the website, providing a seamless and immersive shopping experience',
  },
  {
    name: 'Seamless Checkout Experience',
    Icon: '/images/fIcon2.svg',
    description:
      'The checkout process offers streamlined interface, secure payments, convenient delivery, ensuring a hassle-free transactions for our customer',
  },
  {
    name: 'Planet-Friendly Access',
    Icon: '/images/fIcon3.svg',
    description:
      "Prioritizing a Planet-Friendly Shopping Experience strives to embed environmental consciousness into every aspect of our e-commerce platform.",
  },
]

export default function Home() {
  const [speed, set] = useState(1)
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>  
          <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            Revolutionize your{' '}<br/>
            <span className='text-blue-600'>
            online shopping
            </span><br/>
            experience
            .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-white'>
            Step Into the Future: Explore Our 3D Product Showcase for an Immersive Experience Like Never Before!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants()}>
              Browse Trending
            </Link>
            <Link href='/about-us'>
              <Button variant='ghost'>
                Our quality promise &rarr;
              </Button>
            </Link>
          </div>
        </div>
        
        <div className='flex justify-between py-[100px]'>
          <div className="left flex flex-col justify-between">
            <div className="top">
              <p className='text-[20px] font-medium leading-7 mb-[10px]'>{'(01)'}</p>
              <h2 className='text-[20px] font-extrabold leading-7 tracking-[5px]'>ABOUT US</h2>
            </div>
            <div className="bottom">
              <p className='text-[18px] font-normal leading-[25px]'>Our meta-wardrobe can analyze a customer's <span className='font-medium'>body type, size, and proportions to provide personalized clothing</span> recommendations, leading to increased customer engagement and sales.</p>
            </div>
          </div>
          <div className="right ml-16">
            <h2 className='text-[32px] font-bold leading-[40px] uppercase mb-[75px]'>Our collection features cutting-edge <span className='text-[#BDBDBD]'>3D-designed shoes</span> that seamlessly blend <span className='text-[#BDBDBD]'>innovation with style</span></h2>
            <Link href="/about-us" className='border-[2px] border-solid border-white text-[14px] font-bold leading-[22px] py-4 px-10 rounded-full inline-block transition-all duration-300 hover:shadow-[0px_0px_10px_rgba(255,255,255,1)]'>Explore</Link>
          </div>
        </div>

        <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='DON’T MISS OUT ON NEW DROPS'
          number="(02)"
          tag={true}
        />


        <div className='flex justify-between py-[100px]'>
          <div className="left flex flex-col justify-between">
            <div className="top">
              <p className='text-[20px] font-medium leading-7 mb-[10px]'>{'(03)'}</p>
              <h2 className='text-[20px] font-extrabold leading-7 tracking-[5px] mb-10'>OUR WORK</h2>
            </div>
            <div className="bottom">
              <p className='text-[32px] font-bold leading-[40px] uppercase'>Immerse and discover the exquisite harmony of art and fashion in every step.</p>
            </div>
          </div>
          <div className="right ml-16  flex flex-col justify-between items-start">
            <h2 className='text-[18px] font-normal leading-[25px] text-[#BDBDBD]'>Our meta-wardrobe can analyze a customer's <span className='text-white'>body type, size, and proportions to provide personalized clothing</span> recommendations, leading to increased customer engagement and sales.</h2>
            <Link href="/products" className='border-[2px] border-solid border-white text-[14px] font-bold leading-[22px] py-4 px-10 rounded-full inline-block transition-all duration-300 hover:shadow-[0px_0px_10px_rgba(255,255,255,1)]'>Explore</Link>
          </div>
        </div>
      </MaxWidthWrapper>

      <section>
        <MaxWidthWrapper className='py-20'>
          <p className='text-[20px] font-medium leading-7 mb-[10px] text-center'>{'(04)'}</p>
          <h2 className='text-[20px] font-extrabold leading-7 tracking-[5px] mb-[80px] text-center'>KEY FEATURES</h2>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center px-[20px]'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='flex items-center justify-center'>
                    {<Image src={perk.Icon} alt='Perks' width={48} height={48}/>}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-[20px] font-medium leading-[30px] text-white'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-[16px] font-normal leading-[24px] text-white'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
