import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
    return (
        <section className='bg-secondary lg:h-[500px] h-[400px]'>
            <div className='container mx-auto  h-full flex justify-between'>
                {/* left */}
                <div className='h-full flex items-center lg:w-1/2 w-full'>
                    <div className='flex flex-col  gap-y-20'>

                        <div>
                            <h1 className='h1 text-primary'>Fresh Arrivals Online</h1>
                            <p className='normal mt-5 text-accent'>Discover Our Newest Collection Today.</p>
                        </div>
                        <div>
                            <Button className='normal px-6 lg:h-12 h-10'>View Collection <ArrowRight className='ml-2'/></Button>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='w-1/2 relative lg:block hidden'>
                    <div className='h-[350px] w-[350px] rounded-full bg-muted  absolute bottom-0 right-0'/>
                    <Image src={"/assets/Burst-pucker.svg"} alt='a' width={50} height={50} className='absolute top-[20%] left-[45%] '/>
                    <Image src={"/assets/header-img.png"} alt='image' width={300} height={300} className='absolute bottom-0 right-0'/>
                </div>
            </div>
        </section>
    )
}
