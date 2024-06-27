"use client"
import React from 'react'
import grace from "../../../public/assets/myPicture.jpg";
import Image from 'next/image';

function Intro() {
    return (
        <div className='container lg:my-auto flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center lg:gap-10'>
            <div className="text-center lg:w-1/2">
                <h2 className="lg:text-7xl text-4xl py-2 bg-clip-text text-transparent bg-gradient-to-tl from-[#AD7FAD] to-[#F1B2AA] font-extrabold mt-3 lg:mt-0">
                    Grace Ofubu
                </h2>

                <h3 className="text-2xl py-2 text-zinc-700 dark:text-white">Front-End Web Developer</h3>
                <h4 className='text-zinc-700 dark:text-zinc-300 text-start mt-10 lg:mt-20 font-bold text-lg lg:text-3xl'>Favourite Quote:</h4>
                <p className="font-medium text-start lg:text-xl py-2 leading-8 dark:text-zinc-200 italic text-gray-800">
                    "You never lose, You either win or You learn."
                </p>
            </div>
            <div className="relative lg:w-1/2 h-full mt-4 mx-auto overflow-hidden">
                <div className="relative ">
                    <Image src={grace} alt="myImage" className="lg:w-screen lg:h-screen w-full h-full m-auto rounded-full" />
                </div>
            </div>


        </div>
    )
}

export default Intro