import Link from 'next/link'
import React from 'react'

export default function OfferSection({title}:{title:string}) {
  return (
    <div className='text-white  bg-primary flex justify-center gap-3 py-3'>
        <h1 className='text-base'>{title}</h1>
        <Link href={'#'} className='text-base font-bold'>Order Now</Link>
    </div>
  )
}
