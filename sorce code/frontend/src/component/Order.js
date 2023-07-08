import React, { useContext } from 'react'

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Order() {
    // const product  = useContext(ProductContext)
    // console.log(product)
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const orderProduct = JSON.parse(localStorage.getItem("orderProduct"))
    if(!user){
       navigate('/login')
    }
    const [message, setMessage] = useState('');
    // const orderProduct = useSelector((state) => {
    //     return state.orderReducer;
    // })
    const [fullName, setFullName] = useState();
    const [phoneNumber, setPhone] = useState();
    const [houseNumber, setHouseNumber] = useState();
    const [street, setStreet] = useState("");
    const [city, setCity] = useState();
    const [Pincode, setPincode] = useState();
    function handleName(event) {
        setFullName(event.target.value);
    }
    function handlePhone(event) {
        setPhone(event.target.value);
    }
    function handleHouse(event) {
        setHouseNumber(event.target.value);
    }
    function handleStreet(event) {
        setStreet(event.target.value)
    }
    function handleCity(event) {
        setCity(event.target.value);
    }

    function handlePincode(event) {
        setPincode(event.target.value);
    }

    const data = { fullName, phoneNumber, houseNumber, street, city, Pincode, orderProduct , qty:1 };


    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(data)
    //     const response = await fetch('http://localhost:8080/order', {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })

    //     const res = await response.json();
    //     setMessage(res.message);
    //     if (res.message === 'ok') {
    //         navigate('/payment')
    //     } else {
    //         navigate('/');
    //     }

    // }

    function handleSubmit(e){
        e.preventDefault();

        localStorage.setItem("orderProduct",JSON.stringify(data));
        navigate('/payment')
    }

    return (
        <>

            <div className="container-fluid justify-content-center m-auto orderHeading  py-1 text-center">
                <h3 className=''>Please fill your Order details carefully</h3>
            </div>
            <div className="container m-auto orderHeading  py-1 text-center">
                <h3>{message}</h3>
            </div>
            <div className="container-fluid login align-middle ">

                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12 col-md-9 col-sm-12">
                        <form onSubmit={handleSubmit}>
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-9 col-12 col-sm-12">
                                    <div className="m-3">
                                        <i class="fa-solid icon mx-2 fa-user"></i>
                                        <input type="text" className="form-control" autoComplete='off' name="fullName" onChange={handleName} placeholder="Full name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-9 col-12 col-sm-12">
                                    <div className="m-3">
                                        <i className="fa-solid fa-phone icon mx-2"></i>
                                        <input type="number" className="form-control" autoComplete='off' name="phoneNumber" onChange={handlePhone} placeholder="Phone number" />
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-9 col-12 col-sm-12">
                                    <div className="m-3">
                                        <i className="fa-solid fa-house icon mx-2"></i>
                                        <input type="text" className="form-control" autoComplete='off' name='houseNumber' onChange={handleHouse} placeholder="House no. or building" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-9 col-12 col-sm-12">
                                    <div className="m-3">
                                        <i class="fa-solid fa-location-dot icon mx-2"></i>
                                        <input type="text" className="form-control" autoComplete='off' name="street" onChange={handleStreet} placeholder="Area , street or village" />
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-9 col-12 col-sm-12">
                                    <div className="m-3">
                                        <i className="fa-solid fa-city icon mx-2"></i>
                                        <input type="text" className="form-control" autoComplete='off' name='city' onChange={handleCity} placeholder="Town/City" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-9 col-12 col-sm-12">
                                    <div className="m-3">
                                        <input type="number" className="form-control" autoComplete='off' name='Pincode' onChange={handlePincode} placeholder="Pincode" />
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                               <div className="col-lg-6 col-md-9 col-12 col-sm-12">
                               <div className="m-3  text-center">
                                    <button type="submit" className="btn btn-outline-success w-100">PayNow</button>
                                </div>
                               </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Order