import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Product() {
    const navigate = useNavigate()
    const [Id, setId] = useState();
    const [Title, setTitle] = useState();
    const [Category, setCategory] = useState();
    const [Price, setPrice] = useState();
    const [Image, setImage] = useState();
    const [Discription, setDiscription] = useState();
    const [message, setMessage] = useState();
    function handleId(event) {
        setId(event.target.value);
    }
    function handleTitle(event) {
        setTitle(event.target.value);
    }
    function handleCategory(event) {
        setCategory(event.target.value);
    }
    function handlePrice(event) {
        setPrice(event.target.value);
    }
    function handleImage(event) {
        setImage(event.target.value);
    }
    function handleDiscription(event) {
        setDiscription(event.target.value);
    }

    const rating = {
        rate: 2.5,
        count: 10
    }

    const data = { Id, Title, Category, Price, Image, Discription, rating };

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/admin', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const res = await response.json();
        setMessage(res.message);
        navigate('/admin')
    }
    return (
        <>
            <div className="container m-auto orderHeading  py-3 text-center">
                <h3>Admin Panel</h3>
            </div>

            <div className="container m-auto orderHeading  py-3 text-center">
                <h3>Add Item in Database</h3>
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
                                    <input type="number" className="form-control" autoComplete='off' name="Id" onChange={handleId} placeholder="Id of Product" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="m-3">                                
                                    <input type="text" className="form-control" autoComplete='off' name="Title" onChange={handleTitle} placeholder="Title" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="m-3">
                                    <input type="number" className="form-control" autoComplete='off' name='Price' onChange={handlePrice} placeholder="Price" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="m-3">                                   
                                    <input type="text" className="form-control" autoComplete='off' name="Discription" onChange={handleDiscription} placeholder="Discription" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="m-3">
                                    <input type="text" className="form-control" autoComplete='off' name='Category' onChange={handleCategory} placeholder="Category" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="m-3">
                                    <input type="text" className="form-control" autoComplete='off' name='Image' onChange={handleImage} placeholder="link/image" />
                                </div>
                            </div>
                        </div>

                        <div className="container text-center">
                            <button type="submit" className="btn btn-outline-success  m-1">ADD ITEM</button>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Product