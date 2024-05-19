'use client'

import { usePathname } from 'next/navigation'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './Icons'
import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import Image from 'next/image'


const Footer = () => {
  const pathname = usePathname()
  const pathsToMinimize = [
    '/verify-email',
    '/sign-up',
    '/sign-in',
  ]

  return (
    <>
      <footer className='flex-grow-0 w-full max-w-[1440px] mx-auto'>
        <MaxWidthWrapper>
          <div className='newsLetter w-full bg-[#0F0F0F] rounded-t-[48px]'>
            <div className="newsLetterWrapper flex justify-between items-center pt-[62px] pb-[48px] px-[48px]">
              <div className='mr-[40px]'>
                <h2 className='text-[42px] font-extrabold leading-[48px] text-white uppercase w-full max-w-[650px]'>Join our /RIDO COLLECTION & get 15% off</h2>
                <p className='text-[18px] font-medium leading-[24px] text-white mt-[16px] mb-[32px]'>Sign up for free! Join the community.</p>

                <form className='flex'>
                  <input type="text" placeholder='Email address' required className='w-full max-w-[342px] bg-transparent border border-[#FFFFFF] rounded-[8px] py-[10px] px-[16px]'/>
                  <input type="submit" value={"Submit"} className='rounded-[1000px] bg-white w-[156px] h-[48px] flex justify-center items-center text-[14px] font-bold leading-[22px] text-[#FFA52F] ml-[4px] cursor-pointer'/>
                </form>
              </div>
              <div>
                <img src="/images/RIDO.svg" alt="RIDO Logo" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className='w-full max-w-[calc(100vw-40px)] bg-[#232321] rounded-t-[48px] m-auto pt-[40px] px-[49px]'>
          <div className="flex justify-between">
            <div className='w-full max-w-[400px] mr-[40px]'>
              <h2 className='text-[26px] font-extrabold leading-[32px] text-white tracking-[5px]'>ABOUT US</h2>
              <p className='text-[18px] font-medium leading-[24px] text-white mt-[4px]'>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
            </div>

            <div className='flex justify-end w-full max-w-[400px]'>
              {/* <div className='[&>a]:text-[20px] [&>a]:font-normal [&>a]:leading-[24px] [&>a]:block [&>a]:my-[4px] [&>a]:w-fit [&>a:hover]:text-[#FFA52F]'>
                <h3 className='text-[24px] font-bold leading-[28.8px] mb-[16px] text-[#FFA52F]'>Categories</h3>
                <Link href="">Runners</Link>
                <Link href="">Sneakers</Link>
                <Link href="">Basketball</Link>
                <Link href="">Outdoor</Link>
                <Link href="">Golf</Link>
                <Link href="">Hiking</Link>
              </div> */}
              <div className='[&>a]:text-[20px] [&>a]:font-normal [&>a]:leading-[24px] [&>a]:block [&>a]:my-[4px] [&>a]:w-fit [&>a:hover]:text-[#FFA52F] mr-[80px]'>
                <h3 className='text-[24px] font-bold leading-[28.8px] mb-[16px] text-[#FFA52F]'>Company</h3>
                <Link href="">About</Link>
                <Link href="">Contact</Link>
                <Link href="">Blogs</Link>
              </div>
              <div className='[&>a]:text-[20px] [&>a]:font-normal [&>a]:leading-[24px] [&>a]:block [&>a]:my-[4px] [&>a]:w-fit'>
                <h3 className='text-[24px] font-bold leading-[28.8px] mb-[16px] text-[#FFA52F]'>Follow us</h3>
                <div className='flex'>
                  <Link href="" className='[&>*:hover]:stroke-[#FFA52F]'><Facebook/></Link>
                  <Link href="" className='mx-[24px] [&>*:hover]:stroke-[#FFA52F]'><Instagram /></Link>
                  <Link href="" className='[&>*:hover]:stroke-[#FFA52F]'><Twitter/></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer copyright */}
          <div className='mt-[40px] mb-[60px] md:flex md:items-center md:justify-between'>
            <div className='text-center md:text-left'>
              <p className='text-sm text-white'>
                &copy; {new Date().getFullYear()} All Rights
                Reserved
              </p>
            </div>

            <div className='mt-4 flex items-center justify-center md:mt-0'>
              <div className='flex space-x-8'>
                <Link
                  href='/terms'
                  className='text-sm text-white hover:text-[#FFA52F]'>
                  Terms
                </Link>
                <Link
                  href='/privacy-policy'
                  className='text-sm text-white hover:text-[#FFA52F]'>
                  Privacy Policy
                </Link>
                <Link
                  href='/return-policy'
                  className='text-sm text-white hover:text-[#FFA52F]'>
                  Return Policy
                </Link>
              </div>
            </div>
          </div>
          <Image src="/images/footerLogo.svg" alt='Rido Logo' width={1484} height={593}></Image>
        </div>
      </footer>
    </>
  )
}

export default Footer
