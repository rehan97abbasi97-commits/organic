import React from 'react'
import { FaLeaf, FaRecycle, FaTractor } from 'react-icons/fa'

export default function BannerSection() {
    return (
        <section className='w-full'>
            <figure className='w-full relative'>
                <img src="https://preview.themewagon.com/organic/images/banner-1.jpg" alt="" />
                <div className=' absolute w-full p-8 top-10'>
                    <h1 className='text-7xl'>
                        <span className=' font-bold text-[#6BB252]'>Organic</span> Foods at
                        <br />
                        your
                        <span className='font-black'> Doorsteps</span>
                    </h1>
                    <p className='text-2xl text-gray-500 mt-7'>Dignissim massa diam elementum.</p>
                    <div className='flex gap-6 text-xl mt-7'>
                        <button className=' rounded-4xl transform cursor-pointer duration-100 hover:font-black bg-[#6BB252] text-white p-3 ' title='Shop Now'>Start Shoppin</button>
                        <button className='hover:font-black transform cursor-pointer duration-100 rounded-4xl bg-black text-white p-3 ' title='Join Now'>Join Now</button>
                    </div>

                    <div className='flex w-[50%] gap-8 mt-10' >
                        <div className='italic'>
                            <h2 className='text-4xl font-bold'>14k +</h2>
                            <p className='text-2xl'>Product Varieties</p>
                        </div>

                        <div className='italic'>
                            <h2 className='text-4xl font-bold'>50k +</h2>
                            <p className='text-2xl'>Happy Customer</p>
                        </div>

                        <div className='italic'>
                            <h2 className='text-4xl font-bold'>10 +</h2>
                            <p className='text-2xl'>Store Location</p>
                        </div>
                    </div>

                    <div className=' grid grid-cols-3 mt-15'>
                        <div className='text-white bg-[#6BB252] p-4 flex gap-5 items-center'>
                            <figure >
                                <FaRecycle className='text-3xl' />
                            </figure>
                            <div>
                                <h3 className='text-2xl font-bold text-white'>Fresh from farm</h3>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                        </div>

                        <div className='text-white bg-green-950 p-4 flex gap-5 items-center'>
                            <figure >
                                <FaLeaf className='text-3xl' />
                            </figure>
                            <div>
                                <h3 className='text-2xl font-bold text-white'>100% Organic</h3>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                        </div>

                         <div className='text-white bg-orange-600 p-4 flex gap-5 items-center'>
                            <figure >
                                <FaTractor className='text-3xl' />
                            </figure>
                            <div>
                                <h3 className='text-2xl font-bold text-white'>Free delivery</h3>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>


        </section>
    )
}
