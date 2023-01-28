import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NewProduct from '../NewProduct';
import User from '../User'
import Cart from '../Cart'
import Login from '../Login';
import SignUp from "../SignUp"
function Contantbar() {
   return(
    <>
       <div className="col-9 contentbar">
      
       <Routes>
        <Route exact path='/product' element={<NewProduct />} />
        <Route exact path='/user' element={<User />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
      </Routes>
       </div>
    </>
   )
}
export default Contantbar
