"use client"
import React from 'react'
import react from '../../../public/assets/react.svg'
import css from '../../../public/assets/css.svg'
import figma from '../../../public/assets/figma.svg'
import firebase from '../../../public/assets/firebase.svg'
import git from '../../../public/assets/git.svg'
import github from '../../../public/assets/github.svg'
import html from '../../../public/assets/html.svg'
import javascript from '../../../public/assets/javascript.svg'
import next from '../../../public/assets/nextjs.svg'
import tailwind from '../../../public/assets/tailwindcss.svg'
import Image from 'next/image'

function Skills() {
    const images = [html, css, javascript, react, tailwind, next, , git, github, figma, firebase]
    return (
        <div>
            <h2 className='font-bold lg:text-5xl text-3xl text-center bg-clip-text text-transparent bg-gradient-to-tl from-[#AD7FAD] to-[#F1B2AA]'>Skills</h2>
            <h4 className='text-zinc-700 dark:text-zinc-200 text-center italic py-5'>My tools</h4>
            <div className='grid lg:grid-cols-[repeat(auto-fit,150px)] grid-cols-[repeat(auto-fit,50px)] gap-5 justify-center mt-5'>
                {
                    images.map((image,index)=>{
                        return <Image src={image} alt='icons' key={index} className='lg:w-32 lg:h-32' />
                    })
                }
            </div>
        </div>
    )
}

export default Skills