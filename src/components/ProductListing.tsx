'use client'

import { Product } from '@/payload-types'
import { useEffect, useState } from 'react'
import { Skeleton } from './ui/skeleton'
import Link from 'next/link'
import { cn, formatPrice } from '@/lib/utils'
import { PRODUCT_CATEGORIES } from '@/config'
import ImageSlider from './ImageSlider'

interface ProductListingProps {
  product: Product | null
  index: number
  tag: boolean
}

const ProductListing = ({
  product,
  index,
  tag,
}: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 75)

    return () => clearTimeout(timer)
  }, [index])

  if (!product || !isVisible) return <ProductPlaceholder />

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label

  const validUrls = product.images
    .map(({ image }) =>
      typeof image === 'string' ? image : image.url
    )
    .filter(Boolean) as string[]

  if (isVisible && product) {
    return (
      <div className={cn(
          'invisible h-full w-full group/main',
          {
            'visible animate-in fade-in-5': isVisible,
          }
        )}>
        <div className='flex flex-col w-full'>
          <ImageSlider urls={validUrls} tag={tag}/>

          <h3 className='mt-[16px] text-[18px] font-extrabold leading-[26px] text-white'>
            {product.name}
          </h3>
          {/* <p className='mt-1 text-sm text-white'>
            {label}
          </p> */}
          <Link className='cursor-pointer border border-[#232321] mt-[16px] bg-[#232321] font-medium text-[14px] leading-[16.8px] text-white tracking-[0.25px] rounded-full w-full h-[48px] flex justify-center items-center transition-all duration-300 hover:shadow-[0px_0px_10px_rgba(255,255,255,1)]' href={`/product/${product.id}`}>
            View Product <span className='mx-[2px]'>-</span> 
            <span className='text-[#FFA52F]'> {formatPrice(product.price)}</span>
          </Link>
        </div>
      </div>
    )
  }
}

const ProductPlaceholder = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl'>
        <Skeleton className='h-full w-full' />
      </div>
      <Skeleton className='mt-4 w-2/3 h-4 rounded-lg' />
      <Skeleton className='mt-2 w-16 h-4 rounded-lg' />
      <Skeleton className='mt-2 w-12 h-4 rounded-lg' />
    </div>
  )
}

export default ProductListing
