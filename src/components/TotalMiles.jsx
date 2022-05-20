import React from 'react'
import { useSelector } from 'react-redux'

const TotalMiles = () => {
  const entries = useSelector((state) => state.miles)
  const sum = () =>{
    let totalMiles = 0
    entries.forEach(el => {
      totalMiles += parseInt(el.miles)
      
    })
    return totalMiles
  }
  return (
    <div className='text-center'>
        <h3>Total Miles</h3>
        <h1>{sum()}</h1>
    </div>
  )
}

export default TotalMiles