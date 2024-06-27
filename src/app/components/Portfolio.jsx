"use client"
import React from 'react'
import carai from '../../../public/assets/carai.png'
import anon from '../../../public/assets/anon.png'
import cinemz from '../../../public/assets/cinemz.png'
import dineqr from '../../../public/assets/dineqr.png'
import Image from 'next/image'

function Portfolio() {
    const projects = [
        {
            id: 1,
            projectImage: carai,
            projectName: 'Carai',
            projectHref: 'https://github.com/world-wide-techies/P2PCoder',
            projectDescription: 'A p2p code learning platform that connects developers to a single code editor over the internet. They can write and edit code, and communicate via audio and video streaming.'
        },
        {
            id: 2,
            projectImage: anon,
            projectName: 'AnonChat',
            projectHref: 'https://annon-chat.vercel.app/',
            projectDescription: "An Anonymous Chat platform that connects individuals to converse allowing users to engage in real-time, anonymous conversations with other users."
        },
        {
            id: 3,
            projectImage: cinemz,
            projectName: 'Cinemz',
            projectHref: 'https://cinemz.vercel.app',
            projectDescription: 'A p2p code learning platform that connects developers to a single code editor over the internet. They can write and edit code, and communicate via audio and video streaming.'
        },
        {
            id: 4,
            projectImage: dineqr,
            projectName: 'DineQR',
            projectHref: '#',
            projectDescription: 'A p2p code .'
        },
    ]
    return (
        <div>
            <h2 className='font-bold lg:text-5xl text-3xl text-center bg-clip-text text-transparent bg-gradient-to-tl from-[#AD7FAD] to-[#F1B2AA]'>Portfolio</h2>
            <h4 className='bg-clip-text text-transparent bg-gradient-to-tl from-[#AD7FAD] to-[#F1B2AA] text-center italic py-5'>Featured Projects</h4>
            <div className='grid lg:grid-cols-[repeat(auto-fit,400px)] gap-5 justify-center'>
                {
                    projects.map((project) => {
                        return (
                            <a key={project.id} href={project.projectHref} className='w-full overflow-hidden max-h-[400px] rounded-md hover:scale-105 transition-all bg-gradient-to-r from-[#AD7FAD] to-[#F1B2AA] lg:p-5 p-3'>
                                <div>
                                    <Image src={project.projectImage} alt="" className='h-56 w-full' />
                                </div>
                                <div className='pt-3'>
                                    <p className='font-bold text-zinc-900 text-xl lg:text-2xl'>{project.projectName}</p>
                                    <p className='text-sm lg:text-base text-zinc-800 italic'>{project.projectDescription}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio