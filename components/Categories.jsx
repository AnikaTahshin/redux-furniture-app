"use client";

import React from 'react'
import category from '../public/img/Category/categories.json'
import Image from 'next/image'

const Categories = () => {

  return (
    <div className='w-full grid grid-cols-8 gap-3 py-5 px-2'>

        {
            category.map((element,index) => (
                <div key={index} className="flex flex-col justify-center items-center h-32 w-32 p-3 rounded-full bg-lime-300 hover:bg-lime-500 transition-all duration-500 ease-linear cursor-pointer">
                   <Image src={element?.image} alt={element?.name} height={20} width={30} />
                <h1 className='text-sm py-2 text-nowrap text-center font-bold'>{element?.name}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default Categories