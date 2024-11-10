import React from 'react'
import {Header , Footer , Taps , CartSec} from '../section'
const Cart = () => {
  return (
    <div className='w-full h-full bg-gray-900 text-white'>
      <Header/>
      <CartSec/>
      <Taps/>
      <Footer/>
    </div>
  )
}

export default Cart
