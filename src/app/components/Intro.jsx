"use client"
import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import grace from "../../../public/assets/myPicture.jpg";
import Image from 'next/image';

function Intro() {
  return (
    <div>
          <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium">
                  Grace Ofubu
              </h2>
              <h3 className="text-2xl py-2 dark:text-white">Web Developer</h3>
              <p className="font-medium py-5 leading-8 text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem corporis harum non molestiae atque, consequatur
                  excepturi dolorum? Labore repellat amet cupiditate, dignissimos
                  fugit at laudantium voluptatibus sed aperiam suscipit unde!
              </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillTwitterCircle />
              <AiFillTwitterCircle />
              <AiFillTwitterCircle />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full lg:w-1/4 lg:h-1/4 my-20 mx-auto overflow-hidden">
              <Image src={grace} alt="myImage" />
          </div>
    </div>
  )
}

export default Intro