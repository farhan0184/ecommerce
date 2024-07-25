import Image from 'next/image'
import React from 'react'

export default function Logo({isNav}:{isNav:boolean}) {
  return (
    <div className='flex items-center gap-3'>
        <Image src={isNav ?'/assets/nav.png': '/assets/footer.png'} alt='logo' width={40} height={40}/>
        <h2 className='text-2xl font-bold text-primary'>Ecommerce</h2>
    </div>
  )
}
