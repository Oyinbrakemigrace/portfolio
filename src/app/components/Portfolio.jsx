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
            openSource: true,
            projectHref: 'https://github.com/world-wide-techies/P2PCoder',
            projectDescription: 'A peer-to-peer code learning platform that connects developers to a single code editor over the internet. They can write and edit code, and communicate via audio and video streaming.',
            tools: ['Next JS', "Tailwind CSS", 'Firebase']
        },
        {
            id: 2,
            projectImage: cinemz,
            projectName: 'Cinemz',
            projectHref: 'https://cinemz.vercel.app',
            projectDescription: 'Cinemz lets you explore a curated library of movies and TV shows with ease. Enjoy a responsive UI and powerful search functionality, all backed by external APIs to bring you a vast collection of media. Find, discover, and enjoy your favorite entertainment seamlessly!',
            tools: ['React JS', "React-Redux", "Tailwind CSS", 'API']
        },
        {
            id: 3,
            projectImage: anon,
            projectName: 'AnonChat',
            openSource: true,
            projectHref: 'https://annon-chat.vercel.app/',
            projectDescription: "An Anonymous Chat platform that connects individuals to converse allowing users to engage in real-time, anonymous conversations with other users.",
            tools: ['Next JS', "Tailwind CSS", 'Socket.io']
        },

        {
            id: 4,
            projectImage: dineqr,
            projectName: 'DQR',
            projectHref: 'https://dashboard.dineqr.io',
            projectDescription: 'A restaurant app that empowers restaurant owners to manage their business with ease. Owners can create, edit and update menu items, receive orders in real-time, and seamlessly handle incoming transactions. It is a comprehensive solution for enhancing efficiency and providing a top- notch dining experience for customers.',
            tools: ['React JS', "Tailwind CSS", 'Socket.io']
        },
    ]
    return (
        <div>
            <h2 className='font-bold lg:text-5xl text-3xl text-center bg-clip-text text-transparent bg-gradient-to-tl from-[#AD7FAD] to-[#F1B2AA]'>Portfolio</h2>
            <h4 className='text-zinc-700 dark:text-zinc-200 text-center italic py-5'>Featured Projects</h4>
            <div className='grid lg:grid-cols-[repeat(auto-fit,400px)] gap-5 justify-center'>
                {
                    projects.map((project) => {
                        return (
                            <a key={project.id} href={project.projectHref} target='_blank' className='w-full overflow-hidden min-h-[500px]  relative rounded-md hover:scale-105 transition-all bg-gradient-to-r from-[#AD7FAD] to-[#F1B2AA] lg:p-5 p-3'>
                                <div>
                                    <Image src={project.projectImage} alt="projectImage" className='h-56 w-full' />
                                </div>
                                <div className='pt-3 '>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-bold text-zinc-700 text-xl lg:text-2xl'>{project.projectName}</p>
                                        <p className='bg-[#AD7FAD] text-xs font-semibold rounded-full px-2 capitalize text-zinc-700'>{project.openSource && 'open-source project'}</p>
                                    </div>
                                    <p className='text-sm lg:text-base text-zinc-700 italic'>{project.projectDescription}</p>
                                    <div className='space-x-2 absolute bottom-3'>
                                        {project.tools.map((tool, index) => {
                                            return (
                                                <span className='text-zinc-800' key={index}>
                                                    {tool}
                                                    {index < project.tools.length - 1 && " | "}
                                                </span>
                                            );
                                        })}
                                    </div>
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