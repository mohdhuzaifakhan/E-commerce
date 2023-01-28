import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
import { useState } from 'react';

function Navbar() {

    const [user , setUser] = useState({});
    
    const state = useSelector((state)=>{
        return state.ChangeData
    })

    useEffect(()=>{      
      setUser(JSON.parse(localStorage.getItem("user")));    
    })

    const handleClick = ()=>{
        localStorage.clear();
    }

    // const data = useSelector(()=>{
    //   return  state.UserLogin
    // })
  
   
    return (
    <nav className="navbar navbar-expand-lg m-1 shadow  navbar-light bg-light position-sticky top-0">
    <div className="container-fluid">
      <Link className="navbar-brand p-1  mx-2" to="/"><h3>E-commerce</h3></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item listItem">
            <Link className="nav-link active p-1  mx-2 " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item listItem">
            <Link className="nav-link active p-1  mx-2 " to="/product">Products</Link>
          </li>
          <li className="nav-item listItem">
            <Link className="nav-link active p-1  mx-2 " to="/about">About</Link>
          </li>
          <li className="nav-item dropdown listItem">
          <Link className="nav-link active p-1  mx-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {user ? user.name : "Admin"}
          </Link>
          <ul class="dropdown-menu">
            <li><button type='button'  onClick={handleClick} className="dropdown-item">{user ? "Logout" : ""} </button></li>
            
          </ul>
        </li>
         
        </ul>
        

        <Link className="nav-link p-0 d-grid my-1" to="/login"><button type="button" className="btn btn-outline-success mx-2 justify-content-md-end py-2 px-3"><i className="fa-solid fa-right-to-bracket mx-2"></i>Login</button></Link>
        <Link className="nav-link p-0 d-grid my-1" to="/signup"><button type="button" className="btn btn-outline-success mx-2 justify-content-md-end py-2"><i className="fa-solid fa-user mx-2"></i>SignUp</button></Link>
    
       <Link className="nav-link p-0 d-grid my-1" to="/cart"><button type="button" className="btn btn-outline-success mx-2 justify-content-md-end py-2"><i className="fa-solid fa-cart-shopping mx-2 "></i>Cart({state.length})</button></Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar