import React, { createContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddProduct } from './actions/AddCart'
import { data } from './data';
import { orderProduct } from './actions/PaymentAction';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { UserLogin, UserCartItem } from './actions/userProfile';
import { useState } from 'react';
import axios from 'axios';
import Card from './component/Card'
import Navbar from './component/Navbar';

// const ProductContext = createContext()

function Detail() {

  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()



  // const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const actualPath = path.slice(1);
  const [detail, setDetail] = useState(data);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [responseData, setResponseData] = useState(data[0])
  useEffect(() => {

    async function fetchData() {
      const response = await fetch("http://localhost:8080/admin")
      const res = await response.json();
      console.log(res.data)
      setDetail(res.data);
      const products = res.data.find((item) => {
        return item.id == actualPath
      })
      setResponseData(products);
      console.log(products)
      console.log(detail)

    }

    fetchData();
  }, [])


  async function addItemIntoCart() {

    if (user) {

      const exist = user.cartItems.find((item) => {
        return item.id == responseData.id
      })

      if (exist) {
        alert("Already present in your cart")
      } else {

        user.cartItems.push(responseData);
        localStorage.setItem("user", JSON.stringify(user))
        // window.location.reload();
        const res = await axios.put('http://localhost:8080/addCartItem', {
          id: user._id,
          cartItems: user.cartItems
        })
        // alert(res.data.msg);
      }
    } else {
      navigate('/login')
    }

  }

  function handleBuy() {

    if (!user) {
      alert("Please login")
      navigate('/login')
    } else {
      localStorage.setItem("orderProduct", JSON.stringify(responseData))

      navigate('/order')
    }

  }

  return (
    <>
      <Navbar />

      {/* <ProductContext.Provider value={responseData}> */}

      <div className="container my-4 shadow rounded" id='item'>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-9 col-sm-12 col-12 d-flex justify-content-center align-items-center">
            <img height="75%" width="85%" className='mx-auto my-auto' src={responseData.image} alt={responseData.title} />
          </div>
          <div className="col-lg-6 col-md-10 col-12 col-sm-12">

            <div className="container-fluid p-0 ">
              <h4 className='text-primary my-0 fs-4'><span>CATEGORY : </span>{responseData.category}</h4>
              <h6 className='text-danger my-0 fs-3'><span>Title : </span> {responseData.title}</h6>
              <p className='text-success text-justify my-0 fs-6'> <span className='text-info'>Description :</span> {responseData.description}</p>
              <div className='container d-flex float-left justify-content-center'>

                <div className='lg:p-3 p-0'>
                  <p>
                    <Rating
                      name="text-feedback"
                      value={responseData.rating.rate ? responseData.rating.rate : 4.5}
                      readOnly
                      precision={0.5}
                      emptyIcon={<StarIcon style={{ opacity: 0.7 }} fontSize="inherit" />}
                    />
                  </p>
                </div>
                <div className='p-0'>
                  <p className='text-primary fs-6 lg:p-2'>Reviews : {responseData.rating.count ? responseData.rating.count : 150}</p>
                </div>
              </div>
              <p className='my-0 text-muted'><span>RS:</span>{responseData.price}</p>
            </div>
            <div className='container d-flex justify-content-center' >
              <button type="button" className="btn btn-outline-success  m-2" onClick={() => { handleBuy() }}>Buy Now</button>
              <button type="button" onClick={() => { addItemIntoCart() }} className="btn btn-outline-success  m-2"> Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      {/* </ProductContext.Provider> */}


      <div className="container fs-2 text-primary fw-bolder">
        <h3>Other products</h3>
      </div>
      <div className="container my-3 mx-auto">
        <div className="row justify-content-center">
          <Card />
        </div>
      </div>

    </>
  )
}

export default Detail;


// dispatch(orderProduct(responseData))
// dispatch(AddProduct(responseData))