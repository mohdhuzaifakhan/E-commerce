import React from 'react'

import { useState } from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


function Order() {
    const [message , setMessage] = useState('');
    const navigate = useNavigate();
    const orderProduct = useSelector((state) => {
        return state.orderReducer;
    })
    const [fullName, setFullName] = useState();
    const [phoneNumber, setPhone] = useState();
    const [houseNumber , setHouseNumber] = useState();
    const [street , setStreet] = useState("");
    const [city , setCity] = useState();
    const [Pincode , setPincode] = useState();
    function handleName(event) {
        setFullName(event.target.value);
    }
    function handlePhone(event) {
        setPhone(event.target.value);
    }
     function handleHouse(event){
        setHouseNumber(event.target.value);
     }
     function handleStreet(event){
        setStreet(event.target.value)
     }
     function handleCity(event){
        setCity(event.target.value);
     }

     function handlePincode(event){
        setPincode(event.target.value);
     }
    
    const data = {fullName,phoneNumber,houseNumber,street,city,Pincode,orderProduct};

    
     async function  handleSubmit(e){
        e.preventDefault();
        
            const response = await fetch('http://localhost:8080/order', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
      
            const res = await response.json();
             setMessage(res.message);
            if(res.message==='ok'){
                navigate('/payment')
            }else{
                navigate('/');
            }
                     
           
          
           
        

    }

    return (
        <>

            <div className="container m-auto orderHeading  py-3 text-center">
                <h3>Please fill your Order detail carefully</h3>
            </div>
            <div className="container m-auto orderHeading  py-3 text-center">
                <h3>{message}</h3>
            </div>
            <div className="container login align-middle w-50 h-25 ">

                <div className="signUpPage">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="m-3">
                                    <i class="fa-solid icon mx-2 fa-user"></i>
                                    <input type="text" className="form-control" autoComplete='off' name="fullName" onChange={handleName} placeholder="Full name" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="m-3">
                                    <i className="fa-solid fa-phone icon mx-2"></i>
                                    <input type="number" className="form-control" autoComplete='off' name="phoneNumber" onChange={handlePhone} placeholder="Phone number" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="m-3">
                                    <i className="fa-solid fa-house icon mx-2"></i>
                                    <input type="text" className="form-control" autoComplete='off' name='houseNumber' onChange={handleHouse} placeholder="House no. or building" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="m-3">
                                    <i class="fa-solid fa-location-dot icon mx-2"></i>
                                    <input type="text" className="form-control" autoComplete='off' name="street" onChange={handleStreet} placeholder="Area , street or village" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="m-3">
                                    <i className="fa-solid fa-city icon mx-2"></i>
                                    <input type="text" className="form-control" autoComplete='off' name='city' onChange={handleCity} placeholder="Town/City" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="m-3">
                                    <input type="number" className="form-control" autoComplete='off' name='Pincode' onChange={handlePincode} placeholder="Pincode" />
                                </div>
                            </div>
                        </div>
                        <div className="container text-center">
                             <button type="submit" className="btn btn-outline-success  m-1">PayNow</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Order