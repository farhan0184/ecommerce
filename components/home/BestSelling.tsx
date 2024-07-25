'use client'
import React from 'react'
import { productData } from './data'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import ProductCard from '../ProductCard'

export default function BestSelling() {
    

    return (
        <section>
            <div className='container mx-auto'>
                <div className='space-y-3 text-center'>
                    <p className='text-accent normal'>Shop Now</p>
                    <h2 className='h2 font-bold text-primary'>Best Selling</h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 md:gap-10 gap-y-10'>
                    {
                        productData.slice(0, 4).map((item, index) => (
                            <ProductCard key={index} item={item} />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
