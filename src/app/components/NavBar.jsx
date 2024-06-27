"use client"
import React from 'react'
import { IoMoon } from 'react-icons/io5'

function NavBar({setDarkMode, darkMode}) {
    return (
       <div className="lg:pb-10 pb-20">
            <nav className="py-4 flex justify-between bg-gray-400/20 lg:px-10 px-4 fixed left-0 w-full">
                <h1 className="text-xl">grace</h1>
                <div className="flex items-center">
                    <div>
                        <IoMoon onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
                    </div>
                    <div>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2  rounded-md ml-8"
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