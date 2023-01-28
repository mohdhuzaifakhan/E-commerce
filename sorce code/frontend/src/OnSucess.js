import React from 'react'

function OnSucess() {
  return (
    <div>


      <form  >
        <div className="row payment border bg-light m-1 p-1">
          <div className="col-10">
            <div className="row">
              <div className="col-3">
                <input type="radio" id='paytm' name='payment' value='paytm'
                  checked={selected === 'paytm'}
                  onChange={handleRadioBtn} />
                <label htmlFor="paytm" className='paymentIcon'>PayTm</label>
              </div>

            </div>
            {
              selected === 'paytm' ? <form onSubmit={handleSubmit} method="PUT">
                <div className="row m-1 p-1">
                  <div className="col-8">
                    <input type="radio" id='wallet' name='PaymentWallet' />
                    <label htmlFor="wallet" className='m-1'>Payment wallet</label>
                  </div>
                  <div className="col-4  text-center">

                    <input type="submit" class="btn btn-danger">Continue...</input>


                  </div>
                </div>
              </form> : <div className="col text-center">first selected this method for payment</div>
            }
          </div>
        </div>
        <div className="row payment border bg-light m-1 p-1">
          <div className="col-10">
            <div className="row">
              <div className="col-3">
                <input type="radio" id='paytm' name='PAYMENT' value='upi' checked={selected === 'upi'}
                  onChange={handleRadioBtn} />
                <label htmlFor="paytm" className='paymentIcon'>UPI</label>
              </div>
            </div>
            {
              selected === 'upi' ? <form onSubmit={handleSubmit} method="PUT" >
                <div className="row m-1 p-1">
                  <div className="col-8">
                    <input type="radio" id='wallet' name='PaymentWallet' />
                    <label htmlFor="wallet" className='m-1'>Phone Pay</label>
                  </div>
                  <div className="col-4  text-center">

                    <input type="submit" class="btn btn-danger">Continue...</input>

                  </div>
                </div>
                <div className="row m-1 p-1">
                  <div className="col-8">
                    <input type="radio" id='wallet' name='PaymentWallet' />
                    <label htmlFor="wallet" className='m-1'>Your UPI ID</label>
                  </div>
                  <div className="col-4  text-center">

                    <input type="submit" class="btn btn-danger">Continue...</input>

                  </div>
                </div>
              </form> : <div className="col text-center">first selected this method for payment</div>
            }
          </div>
        </div>
        <div className="row payment border bg-light m-1 p-1">
          <div className="col-10">
            <div className="row">
              <div className="col-6">
                <input type="radio" id='paytm' name='PAYMENT' value="card" checked={selected === 'card'}
                  onChange={handleRadioBtn} />
                <label htmlFor="paytm" className='paymentIcon'>Credit/Debit/ATM card</label>
              </div>
            </div>
            {
              selected === 'card' ? <form onSubmit={handleSubmit} method="PUT" >
                <div className="row m-1 p-1">
                  <div className="col-6">
                    <input type="text" name="cardNumber" placeholder='Enter your card number ' className='form-control' />
                  </div>
                  <div className="col-3  text-center">
                    <input type="text" className='form-control' name='futureDate' placeholder='dd/mm' />
                  </div>
                  <div className="col-3  text-center">
                    <input type="text" className='form-control' name='cvv' placeholder='Enter cvv' />
                  </div>
                </div>
                <div className="row m-1 p-1 justify-content-end">
                  <div className="col-4 text-end">

                    <input type="submit" onChange={handleSubmitBtn} name="payment" value="paypal" class="btn btn-danger">Pay ({total.toFixed(2)})</input>

                  </div>
                </div>
              </form> : <div className="col text-center">first selected this method for payment</div>
            }
          </div>
        </div>
      </form>

    </div>
  )
}

export default OnSucess
