import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  decrement, increment } from './counter/counterSlice'


export function Counter() {
    const count= useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
 
  return (
    <div >
      <div className='container mt-5 text-center'>
        <Button

          aria-label="Increment value"
         onClick={()=>dispatch(increment())}
        >
          Increment
        </Button>
        <span className='m-5'>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={()=>dispatch( decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  )
}