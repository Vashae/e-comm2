import React from 'react'

export default function cardofCar({brand, year}: {brand:string, year:number}) {
  return (
       <div className="mt-2 p-2 border-t text-sm text-gray-600">
      <p> {brand}</p>
      <p> {year}</p>
    </div>
  )
}
