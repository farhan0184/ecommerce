import { Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { ProductData } from './home/data'
import { Button } from './ui/button'
import { BiCartAdd } from 'react-icons/bi'

export default function ProductCard({item}:{item:ProductData}) {
    const [isHover, setIsHover] = React.useState(false)
    return (
        <div  className='lg:my-32  my-24 '>
            <div className='bg-secondary rounded relative hover:opacity-60 transition-opacity duration-300' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
                <Image src={item.image} alt={item.title} width={300} height={300} className=''/>
                {isHover && <Heart className='absolute top-3 right-3 text-gray-400 cursor-pointer' onClick={() => console.log('clicked')}/>}
                {isHover && <Button className='absolute bottom-0 w-full h-14 h3 rounded-t-none'>Add To Cart <BiCartAdd className='text-2xl ml-3' /></Button>}
            </div>
            <div className='pt-5'>
                <h3 className='normal font-bold text-primary'>{item.title}</h3>
                <div className='mt-5 flex items-center gap-10'>
                    <p className='px-5 py-1 w-max normal font-semibold border-[1px] rounded-full'>{item.stock}</p>
                    <p className='normal'>${item.price}.00</p>
                </div>
            </div>
        </div>
    )
}
