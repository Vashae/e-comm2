'use client'
import React from 'react'
import CardofCar from '@/components/CardofCar'
import { useState } from 'react'


interface Car {
    brand: string
    year: number
}

  const cars: Car[] = [
    {brand: 'Toyota',
    year: 2021},

  
   {
    brand :'Honda',
    year: 1999
  },
   {
    brand : 'BMW' ,
    year: 2015
  }
  ,
 {
    brand: 'Mercedes' ,
    year: 2010
  },
   {
    brand : 'Audi',
    year: 2023
  },
  {
    brand: 'BMW',
    year : 2025
  },
  {brand: 'Volvo',
    year: 2013
  }
  ]

  export default function page() {
const [showcards, setShowCards] = useState(false)
const handleCar = ()=>{
setShowCards(true)
}

  return (
    <>
    <div onClick={handleCar} className='flex flex-wrap justify-center items-start gap-4 p-4'>
        {cars.map((car,index) =>  (<div key={index} className='flex flex-col w-1/3 items-center border rounded p-4'>
    <h1>Car info</h1>
    <p>{car.brand}</p>
    <p>{car.year}</p>
    {showcards && <CardofCar brand={car.brand} year={car.year}  />}
    </div>
      ))}
</div> 
</>
  )
}
