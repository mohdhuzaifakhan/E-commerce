import React from 'react'

import { useSelector } from 'react-redux'
import { useState } from 'react';
import PaymentButton from './PaymentButton';
import GooglePay from './GooglePay';

function Payment() {
    const orderProduct = useSelector((state) => {
        return state.orderReducer;
    })
    const [selected, setSelected] = useState('paytm');

    const handleRadioBtn = (e) => {
        setSelected(e.target.value);
    }

    const [paymentMethod, setPaymentMethod] = useState();

    function handleSubmitBtn(e) {
        setPaymentMethod(e.target.value);
    }

    async function handleSubmit() {
        const number = 8433043426
        const response = await fetch(`http://localhost:8080/pay?phone=${number}&payment=${paymentMethod}`)

        alert(response.message);
    }

    const shipingCharge = 10;
    const amount = orderProduct.price;
    const total = shipingCharge + amount;
    const show = orderProduct.success;
    return (
        <div className='container-fluid main-container bg-light'>
            <div className="container-fluid child-container position-absolute">
                <div className="row  justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-6 text-info  text-center m-2 p-1"><h4>Please confirm your order</h4></div>
                       
                    </div>
                    <div className="col-6 border m-1  p-1">
                          <div className="row justify-content-center">
                            <div className="col-10 text-center p-2 m-1">
                                {
                                    show ? <div className=" fw-bolder col-12 text-success">Now You can pay</div>: <div className=' fw-bolder col-12 text-danger p-2 m-1'> Sorry you can not pay   </div>
                             
                                }
                            </div>
                          </div>
                    </div>
                    <div className="col-6 border m-1 p-1">
                        <div className="row moneyCard  m-1 p-1 bg-light">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className='text-info  p-1 m-1'>PRICE DETAILS</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <p className='fw-bolder p-1 m-1'>Items ({orderProduct.qty} quantity)</p>
                                    </div>
                                    <div className="col-6">
                                        <p className='fw-bolder text-end p-1 m-1'>Rs:{orderProduct.price}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <p className=' fw-bolder p-1 m-1'>Shiping Charge</p>
                                    </div>
                                    <div className="col-6">
                                        <p className=' fw-bolder text-end  p-1 m-1'>Rs:{shipingCharge}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <p className=' fw-bolder p-1 m-1'>Amount Payable</p>
                                    </div>
                                    <div className="col-6">
                                        <p className=' fw-bolder text-end  p-1 m-1'>Rs:{total.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="row p-1 m-1 justify-content-around">
                                    <div className="col-5  p-1 m-1 fw-bolder  text-center" id='paypal-button-container'>
                                        <PaymentButton show={show} data={total.toFixed(2)} />
                                    </div>
                                    <div className="col-5   p-1 m-1 fw-bolder  text-center">
                                        <GooglePay />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
