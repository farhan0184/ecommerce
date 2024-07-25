import React from 'react'
import OfferSection from './OfferSection'
import Logo from './Logo'
import { Navigation } from './Navigation'
import { Input } from './ui/input'
import { CircleUserRound, Menu, Search, ShoppingCart } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div >
            <OfferSection title="Get 25% OFF on your first order." />
            <nav className='container mx-auto'>
                <div className='flex justify-between items-center py-5'>
                    <div>
                        <Logo isNav={true} />
                    </div>
                    <div>
                        <Navigation />
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='lg:flex items-center border-[1px] rounded-md px-1  hidden'>
                            <Search size={30} className='text-gray-500' />
                            <Input placeholder='Search' className='border-none focus-visible:ring-0 focus-visible:ring-offset-0' />

                        </div>
                        <ShoppingCart size={30} className='text-gray-500' />
                        <CircleUserRound size={30} className='text-gray-500' />
                        <Sheet>
                            <SheetTrigger asChild>
                            <Menu size={30} className='text-gray-500 lg:hidden block'/>
                            </SheetTrigger>
                            <SheetContent className='flex items-center h-screen '>
                                <ul className='flex flex-col justify-center items-center  gap-y-7 w-full text-xl'>
                                    <li><Link href={'#'}>Home</Link></li>
                                    <li><Link href={'#'}>Categories</Link></li>
                                    <li><Link href={'#'}>About</Link></li>
                                    <li><Link href={'#'}>Contact</Link></li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </div>
    )
}
