import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Navbar from './component/Navbar';
import { DataProvider } from './App';

function Login() {
    //const dispatch = useDispatch();
    const {userData , setUserData} = useContext(DataProvider);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(event) {
        setEmail(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       
            const response = await fetch(`http://localhost:8080/login?email=${email}&password=${password}`)
            const res = await response.json();
            setUserData(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            alert(res.msg);
            navigate('/');
            window.location.reload()
   
    }

    return (
        <>

            <Navbar/>
            <div className="container m-auto userLogo flex text-center py-1 "></div>
            <div className=" container m-auto  orderHeading  py-1  text-center"><h3>Please Login</h3></div>
            <form method='GET' onSubmit={handleSubmit}>

                <div className="row justify-content-center">
                    <div className="login col-10 col-lg-3 col-md-8 col-sm-10 justify-content-center d-flex ">

                        <div className="loginPage col-10 col-lg-3 rounded col-md-8 col-sm-10 py-4 shadow">
                            <div className="row justify-content-around">
                                <div className="m-3 col-10">
                                    <i className="fa-solid fa-envelope icon mx-2"></i>
                                    <input type="email" name="email" onChange={handleEmail} className="form-control" autoFocus="on" autoComplete='off' placeholder="User email" />
                                </div>
                            </div>
                            <div></div>
                            <div className="row justify-content-around">
                                <div className="m-3 col-10">
                                    <i className="fa-solid fa-key icon mx-2"></i>
                                    <input type="password" onChange={handlePassword} name="password" className="form-control" placeholder=" User password" />
                                </div>
                            </div>
                            <div className="row justify-content-around">
                                <div className="m-3 col-10">
                                    <input type="submit" className="form-control btn-outline-primary" value="Login" />
                                </div>
                                <div className="col-10 text-muted">If you don't have account?? please create</div>
                                <div className="m-3 col-10">

                                    <Link to='/signup'>
                                        <button className='btn w-100 btn-outline-success p-1'>Create Account</button>
                                    </Link>

                                </div>
                            </div>
                        </div>



                    </div>

                </div>

            </form>




        </>
    )
}

export default Login
