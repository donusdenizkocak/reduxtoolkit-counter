import React from 'react'
import { useSelector } from 'react-redux'

export const Footer = () => {
const data = useSelector((state)=> state.counter.value)
  return (
    <div className='container '>
        <div className='text-center mt-5'>
        Globalden gelen değerim:  {data}
        </div>
         </div>
  )
}
