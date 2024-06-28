"use client"
import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
    return (
        <footer className='w-full py-4 text-zinc-600 bg-[#F4F4F5] dark:text-zinc-400 dark:bg-gradient-to-tl dark:from-[#301c30] dark:to-black text-center'>
            <div className='flex justify-center gap-6 items-center lg:text-4xl text-3xl pb-3 text-[#AD7FAD]'>
                <a href="https://linkedin.com/in/grace-ofubu" target='_blank' className='active:scale-105 transition-all ease-out duration-500'><FaLinkedin /></a>
                <a href="https://github.com/Oyinbrakemigrace" target='_blank' className='active:scale-105 transition-all ease-out duration-500'><FaGithubSquare /></a>
                <a href="https://twitter.com/yh_itsgrace/" target='_blank' className='active:scale-105 transition-all ease-out duration-500'><FaSquareXTwitter /></a>
                <a href="https://www.instagram.com/yh_itsgrace?igsh=YnUzaHNyMXkyZTlr" target='_blank' className='active:scale-105 transition-all ease-out duration-500'><FaInstagramSquare /></a>
            </div>
            <p className='text-sm lg:text-lg'>Copyright &copy; {new Date().getFullYear()} Grace Ofubu All rights reserved.</p>
        </footer>
    )
}

export default Footer