import React from 'react'


import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteProduct,LikeProduct } from '../actions/AddCart'
import {orderProduct} from '../actions/PaymentAction';

function CartItem(props) {
  const {price, title, image, rating, qty,isLike } =props.data
  const shipingCharge = 10;


  const total = shipingCharge+qty*price

  const dispatch = useDispatch();

 return(
  <>
  

  <div className="col-lg-5 col-md-10 col-sm-11 col-12 shadow rounded cartItem my-1">
        <div className="row cartItem justify-content-between">
          <div className="col-5 m-1 text-center shadow"><img src={image} height="200px" width="180px" alt={title} /></div>
          <div className="col-6  textDetail ">
            <div className="row mt-1 py-1 justify-content-between">
              <div className="col-7 py-1">
                {title.slice(0, 20)}
              </div>
              <div className="col-5 py-1"> <span>Price:RS </span>{price}</div>
            </div>
            <div className="row mt-1 py-1 justify-content-between">
              <div className="col-7 py-1">
                <span className='mr-1'>rating:</span>{rating.rate}
              </div>
              <div className="col-5 py-1"><span className='mr-1'>quantity:</span>{qty}</div>
            </div>
            <div className="row mt-1 justify-content-between">
              <div className="col-7 py-1">
                <span className='mr-1'>shiping:RS </span>{shipingCharge}
              </div>
              <div className="col-5 py-1"><span className='mr-1'>Total:RS </span>{total.toFixed(2)}</div>
            </div>
           
            <div className="row  mt-1 py-1 justify-content-between">
              <div className="col-7 py-1">
                <i className="fa-solid fa-trash text-danger" onClick={() => dispatch(DeleteProduct(props.data))}></i>
              </div>
              <div className="col-5 py-1">
                 {isLike === true ? <i className="fa-solid fa-heart text-success "onClick={() => dispatch(LikeProduct(props.data))}></i> : <i className='fa-solid fa-heart text-danger' onClick={()=>dispatch(LikeProduct(props.data))}></i>
                 } 
              </div>
            </div>
            <div className="row text-end">
              
               <Link to='/order'> <button className='btn btn-outline-success' onClick={()=>dispatch(orderProduct(props.data))}> BuyNow</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  
  
  
 )
  

}
export default CartItem;
