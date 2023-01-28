import React from 'react'
import {useSelector,useState} from 'react'
import {Link} from 'react-router-dom';
function Method() {

    const orderProduct = useSelector((state) => {
        return state.orderReducer;
    })
    const [selected, setSelected] = useState('paytm');

    const handleRadioBtn = (e) => {
        setSelected(e.target.value);
    }
    return (
        <div>
            <div className="row payment border bg-light m-1 p-1">
                <div className="col-10">
                    <div className="row">
                        <div className="col-3">
                            <input type="radio" id='paytm' name='PAYMENT' value='paytm'
                                checked={selected === 'paytm'}
                                onChange={handleRadioBtn} />
                            <label htmlFor="paytm" className='paymentIcon'>PayTm</label>
                        </div>

                    </div>
                    {
                        selected === 'paytm' ? <form >
                            <div className="row m-1 p-1">
                                <div className="col-8">
                                    <input type="radio" id='wallet' name='PaymentWallet' />
                                    <label htmlFor="wallet" className='m-1'>Payment wallet</label>
                                </div>
                                <div className="col-4  text-center">
                                    <Link to='/stripePayment'>
                                        <button type="button" class="btn btn-danger">Continue</button>
                                    </Link>
                                </div>
                            </div>
                        </form> : <div className="col text-center">first selected this method for payment</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Method
