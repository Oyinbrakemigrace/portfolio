"use client"
import React, { useEffect, useState } from 'react'
import { IoMoon } from 'react-icons/io5'

function NavBar({setDarkMode, darkMode}) {
    const [show, setShow] = useState(false)

    const handleTransition = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleTransition)
        return () => window.removeEventListener('scroll', handleTransition)
    }, [])
    return (
       <div className="lg:pb-10 pb-20">
            <nav className={`py-4 flex justify-between bg-[#AD7FAD] bg-opacity-30 lg:px-10 px-4 fixed left-0 w-full ${!show ? "transition-all duration-500 ease-in bg-opacity-0" : ""
          }`}>
                <h1 className="text-xl">grace</h1>
                <div className="flex items-center">
                    <div className='active:scale-105 transition-all'>
                        <IoMoon onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
                    </div>
                    <div className='active:scale-105 transition-all ease-out duration-500'>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#AD7FAD] to-[#F1B2AA] text-white px-4 py-2  rounded-md ml-8"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </nav>
       </div>
    )
}

export default NavBar