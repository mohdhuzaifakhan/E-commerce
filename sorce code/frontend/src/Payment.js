import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useState } from 'react';
import PaymentButton from './PaymentButton';
import GooglePay from './GooglePay';
import axios from 'axios';

function Payment() {
    const orderProduct = JSON.parse(localStorage.getItem("orderProduct"))
    const [show, setShow] = useState(false);
    // const orderProduct = useSelector((state) => {
    //     return state.orderReducer;
    // })

    useEffect(() => {

        if (orderProduct) {
            setShow(true)
        }

    }, [orderProduct])

    function del(){
        setPaymentStatus(false);
        setPaymentMsg("");
        setConfirmOrder("");
    }

    // setTimeout(del,3000);

    const [paymentType, setPaymentType] = useState('paypal');
    const shipingCharge = 10;
    const qty = orderProduct.qty ? orderProduct.qty : 1
    const amount = orderProduct.orderProduct.price;
    const total = shipingCharge + amount * qty;
    const [paymentMsg, setPaymentMsg] = useState('payment succesfull');
    const [paymentStatus, setPaymentStatus] = useState(false);
    const [confirmOrder, setConfirmOrder] = useState("order confirm")
    const order = { ...orderProduct, paymentType }

    function statusFunction(msg, status) {
        setPaymentMsg(msg);
        setPaymentStatus(status);
    }

    useEffect(() => {

        async function doOrder() {
            if (paymentStatus) {
                const response = await axios.post('http://localhost:8080/order', {
                    ...order,
                    total
                })
                console.log(response);
                // alert(paymentMsg);
                // alert(response.data.msg);
                setConfirmOrder(response.data.msg);
                // localStorage.removeItem("orderProduct")
                setTimeout(del,3000);
            }
        }
        doOrder()

    }, [paymentStatus, paymentMsg])

    return (
        <>
            {
                paymentStatus ?
                    <div className="container my-5 ">
                        <div className=" alert alert-success" role="alert">
                            {paymentMsg} and {confirmOrder}
                        </div>
                    </div> :
                    <div className='container'></div>
            }
            <div className='container flex  d-flex my-5 bg-white shadow rounded'>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 d-flex justify-content-center">
                            <h4>Please confirm your order</h4>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10 col-sm-12 col-12 m-1  p-1">
                            <div className="row justify-content-center">
                                <div className="col-10 text-center">
                                    {
                                        show ? <div className=" fw-bolder col-12 text-success">Now You can pay</div> : <div className=' fw-bolder col-12 text-danger p-2 m-1'> Sorry you can not pay   </div>

                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className='text-info  p-1 m-1'>Order Detail</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className='text-success text-start p-1'>Items ({orderProduct.qty ? orderProduct.qty : 1} quantity)</p>
                                        </div>
                                        <div className="col-6">
                                            <p className='text-success text-end p-1'>Price:{amount}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className='text-success text-start p-1'>Dilivery Charge</p>
                                        </div>
                                        <div className="col-6">
                                            <p className=' text-success text-end p-1'>Rs:{shipingCharge}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className='text-success text-start p-1'>Payable Amount</p>
                                        </div>
                                        <div className="col-6">
                                            <p className='text-success text-end p-1'>Rs:{total.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-5 col-md-10 col-sm-12 col-12 text-center m-2 p-2" id='paypal-button-container' onClick={() => { setPaymentType('paypal') }}>
                                            <PaymentButton show="true" data={total.toFixed(2)} callback={statusFunction} />
                                        </div>
                                        <div className="col-lg-5 col-md-10 col-sm-12 col-12 text-center m-2 p-2" onClick={() => { setPaymentType('Gpay') }}>
                                            <GooglePay callback={statusFunction} total={total} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment
