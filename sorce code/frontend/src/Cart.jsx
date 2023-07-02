import React, { useEffect } from 'react'
import CartItem from './component/CartItem'
import {useSelector} from 'react-redux';

function Cart() {

  const product = useSelector((state)=>{
    return state.ChangeData
   // return state.userLogin
})




  return (
    <>
       <div className='container  shadow text-center mx-auto my-5'>
             <h2 className='fw-bolder text-dark py-2'>Items in your Cart are ({product.length})</h2>
       </div>
       <div className="container-fluid">
       <div className="row justify-content-center mx-1">
            
        {
        product.map((item,key)=>{
          return    <CartItem key={key}  data={item}/>
        
        })
       }
        </div>
       </div>

      
    </>
  )
}

export default Cart