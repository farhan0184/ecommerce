import React from 'react'
import { HiOutlineTruck } from 'react-icons/hi2'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { SlBadge } from 'react-icons/sl'

const FeatureItem = [
    {
        icon: <HiOutlineTruck className='text-2xl text-primary'/>,
        title: 'Free Shipping',
        description: `Upgrade your style today and get FREE shipping on all orders! Don't miss out.`
    },
    {
        icon: <SlBadge  className='text-2xl text-primary'/>,
        title: 'Satisfaction Guarantee',
        description: `Shop confidently with our Satisfaction Guarantee: Love it or get a refund.`
    },
    {
        icon: <IoShieldCheckmarkOutline className='text-2xl text-primary'/>,
        title: 'Secure Payment',
        description: `Your security is our priority. Your payments are secure with us.`
    }
]

export default function Feature() {
    return (
        <section className='lg:my-32 my-24'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-5 gap-y-10'>
                    {
                        FeatureItem.map((item, index) => (
                            <div key={index} className='md:w-[80%] w-[60%] md:mx-0 mx-auto space-y-5  md: flex flex-col md:items-start items-center'>
                                <span className='bg-secondary h-10 w-10 flex justify-center items-center rounded-full'>{item.icon}</span>
                                <h3 className='h3 font-bold'>{item.title}</h3>
                                <p className='normal text-accent md:text-left text-center'>{item.description}</p>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
