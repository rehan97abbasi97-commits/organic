import React from 'react'
import { FaCheck } from "react-icons/fa";



export default function AboutUs() {
    return (
        <>
        
            <section className=" py-10">

                <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-5 px-2 items-center">

                    <article className=" p-4 pl-[150px]">

                        <h1 className="text-4xl text-[#101828] font-extrabold ">Useful Tools <br />to<span className="text-4xl text-[#text-4xl text-[#4F39F6] font-extrabold] font-extrabold">Help You Build <br /> Faster.</span></h1>
                        <p className="text-gray-400 py-7">It's never been easier to build beautiful websites that <br />convey your message and tell your story.</p>

                        <div className="flex gap-4">

                            <button className="bg-[#4F39F6] py-2.5 px-8  text-white rounded-[10px]">Try It Free</button>
                            <button className="bg-[#4F39F6] py-2.5 px-8  text-white rounded-[10px]">Learn More</button>

                        </div>



                    </article>
                    <figure>
                        <img src="https://preview.themewagon.com/organic/images/banner-ad-1.jpg" />
                    </figure>

                </div>



            </section>

            <section className=" py-5">

                <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-5 px-2 items-center">


                    <figure>
                        <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                    </figure>

                    <article className=" p-4 pl-20">

                        <h1 className="text-4xl font-bold">Boost Productivity</h1>
                        <p className="text-gray-400 py-5">Build an atmosphere that creates productivity in <br />your organization and your company culture.</p>

                        <ul className="leading-6">
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-yellow-300 text-white font-bold p-1.5"><FaCheck /></span>Maximize productivity and growth</li>
                            <li className="flex  py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-yellow-300 text-white font-bold p-1.5"><FaCheck /></span>Maximize productivity and growth</li>
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-yellow-300 text-white font-bold p-1.5"><FaCheck /></span>Maximize productivity and growth</li>

                        </ul>

                    </article>


                </div>



            </section>

            <section className=" py-5">

                <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-5 px-2 items-center">

                    <article className=" p-4 pl-[150px]">

                        <h1 className="text-4xl font-bold">Automated Tasks</h1>
                        <p className="text-gray-400 py-5">Save time and money with our revolutionary <br />services. We are the leaders in the industry.</p>

                        <ul className="leading-6">
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-yellow-300 text-white font-bold p-1.5"><FaCheck /></span>Automated task management workflow</li>
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-yellow-300 text-white font-bold p-1.5"><FaCheck /></span> Detailed analytics for your data</li>
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-yellow-300 text-white font-bold p-1.5"><FaCheck /></span> Some awesome integrations</li>

                        </ul>

                    </article>

                    <figure>
                        <img src="https://cdn.devdojo.com/images/december2020/settings.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                    </figure>

                </div>





            </section>

            <section className=" py-5 bg-[#F9FAFB]">

                <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-5 px-2 items-center">

                    <article className=" p-4 pl-[150px]">

                        <h1 className="text-4xl font-bold">Jam-packed with all the <br />tools you need to succeed!</h1>
                        <p className="text-gray-400 py-5">It's never been easier to build a business of your own. Our tools <br />will help you with the following:</p>

                        <ul className="leading-6">
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-yellow-300 text-white font-bold p-1.5"><FaCheck /></span>Faster Processing and Delivery</li>
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-yellow-300 text-white font-bold p-1.5"><FaCheck /></span> Out of the Box Tracking and Monitoring</li>
                            <li className="flex py-1.5 items-center gap-2 text-gray-500"><span className="rounded-[50%] bg-yellow-300 text-white font-bold p-1.5"><FaCheck /></span> 100% Protection and Security for Your App</li>

                        </ul>

                    </article>

                    <figure>
                        <img src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                    </figure>

                </div>





            </section>

            <section className="py-[150px]">

                <h2 className="text-center text-2xl font-bold text-[#AD56FF]">Don't just take our word for it</h2>
                <h1 className="text-5xl font-bold text-center">See what others are saying</h1>

                <div className="max-w-[1320px] mx-auto grid grid-cols-3  mt-10">

                    <div className="border-r-1 pl-11">
                        <div className="flex items-center ">
                            <figure><img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80" alt="" className=" p-2 w-[70px] h-[70px] rounded-[50%]" /></figure>
                            <article>
                                <h4 className="font-bold">John Doe</h4>
                                <p>CEO of Something</p>
                            </article>
                        </div>
                        <p className="text-[18px] text-gray-500">"This is a no-brainer if you want to take your <br /> business to the next level. If you are looking for <br />the ultimate toolset, this is it!"</p>
                    </div>

                    <div className="border-r-1 pl-11">
                        <div className="flex items-center ">
                            <figure><img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80" alt="" className=" p-2 w-[70px] h-[70px] rounded-[50%]" /></figure>
                            <article>
                                <h4 className="font-bold">Jane Doe</h4>
                                <p>CTO of Business</p>
                            </article>
                        </div>
                        <p className="text-[18px] text-gray-500">"This is a no-brainer if you want to take your <br /> business to the next level. If you are looking for <br />the ultimate toolset, this is it!"</p>
                    </div>

                    <div className=" pl-11">
                        <div className="flex items-center ">
                            <figure><img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80" alt="" className=" p-2 w-[70px] h-[70px] rounded-[50%]" /></figure>
                            <article>
                                <h4 className="font-bold"> John Smith</h4>
                                <p>Creator of Stuff</p>
                            </article>
                        </div>
                        <p className="text-[18px] text-gray-500">"This is a no-brainer if you want to take your <br /> business to the next level. If you are looking for <br />the ultimate toolset, this is it!"</p>
                    </div>





                </div>

            </section>

            <section className="py-10 mx-10">
                <h1 className="text-5xl pb-1.5 text-center">Pricing Options</h1>
                <h2 className="text-3xl text-center pb-10 ">We've got a plan for companies of any size</h2>

                <div className="max-w-[1320px] mx-auto grid grid-cols-3 border-2 border-gray-400 rounded-[10px] py-10  ">

                    <div className=" p-3.5 text-center border-r-2 border-gray-400 ">
                        <h1 className="text-4xl font-medium pb-2.5 ">Basic</h1>
                        <p className="pb-5">The basic plan is a good fit for smaller <br />teams and startups</p>
                        <div className="flex gap-2 justify-center mb-6">
                            <h2 className="text-6xl font-medium pb-2.5" >$19</h2>
                            <p>per user <br />per month</p>
                        </div>
                        <button className="bg-blue-600  text-white font-bold w-full py-2.5 rounded-2xl">Select Your Plan</button>

                    </div>

                    <div className=" p-3.5 text-center border-r-2 border-gray-400 ">
                        <h1 className="text-4xl font-medium pb-2.5 ">Plus</h1>
                        <p className="pb-5">The plus plan is a good fit for medium-<br />size to larger companies</p>
                        <div className="flex gap-2 justify-center mb-6">
                            <h2 className="text-6xl font-medium pb-2.5" >$39</h2>
                            <p>per user <br />per month</p>
                        </div>
                        <button className="bg-blue-600  text-white font-bold w-full py-2.5 rounded-2xl">Select Your Plan</button>

                    </div>


                    <div className=" p-3.5 text-center border-r-2 border-gray-400 ">
                        <h1 className="text-4xl font-medium pb-2.5 ">Pro</h1>
                        <p className="pb-5">The pro plan is a good fit for larger and<br/>enterprise companies.</p>
                    <div className="flex gap-2 justify-center mb-6">
                        <h2 className="text-6xl font-medium pb-2.5" >$59</h2>
                        <p>per user <br />per month</p>
                    </div>
                    <button className="bg-blue-600  text-white font-bold w-full py-2.5 rounded-2xl">Select Your Plan</button>
                    </div>
                


            </div>

        </section >

        

        </>
    )
}