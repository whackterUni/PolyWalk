'use client'

import { TQueryValidator } from '@/lib/validators/query-validator'
import { Product } from '@/payload-types'
import { trpc } from '@/trpc/client'
import Link from 'next/link'
import ProductListing from './ProductListing'

interface ProductReelProps {
  title: string
  subtitle?: string
  href?: string
  query: TQueryValidator
  number: string
  tag: boolean
}

const FALLBACK_LIMIT = 4

const ProductReel = (props: ProductReelProps) => {
  const { title, subtitle, href, query, number, tag } = props

  const { data: queryResults, isLoading } =
    trpc.getInfiniteProducts.useInfiniteQuery(
      {
        limit: query.limit ?? FALLBACK_LIMIT,
        query,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )

  const products = queryResults?.pages.flatMap(
    (page) => page.items
  )

  let map: (Product | null)[] = []
  if (products && products.length) {
    map = products
  } else if (isLoading) {
    map = new Array<null>(
      query.limit ?? FALLBACK_LIMIT
    ).fill(null)
  }

  return (
    <section className='py-12'>
      <div className='md:flex md:items-center md:justify-between mb-4'>
        <div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
          {number ? (
            <p className='text-[20px] font-medium leading-7 mb-[10px]'>{number}</p>
          ) : null}
          {title ? (
            <h1 className='text-2xl font-bold sm:text-3xl w-full max-w-[320px]'>
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <p className='mt-2 text-sm text-white'>
              {subtitle}
            </p>
          ) : null}
        </div>

        {href ? (
          // <Link
          //   href={href}
          //   className='hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block'>
          //   Shop the collection{' '}
          //   <span aria-hidden='true'>&rarr;</span>
          // </Link>
          <Link href={href} className='border-[2px] border-solid border-white text-[14px] font-bold leading-[22px] py-4 px-10 rounded-full inline-block transition-all duration-300 hover:shadow-[0px_0px_10px_rgba(255,255,255,1)]'>SHOP NEW DROP</Link>
        ) : null}
      </div>

      <div className='relative'>
        <div className='mt-6 flex items-center w-full'>
          <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
            {map.map((product, i) => (
              <ProductListing
                key={`product-${i}`}
                product={product}
                index={i}
                tag={tag}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductReel
