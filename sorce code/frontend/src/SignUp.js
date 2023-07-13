import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import { DataProvider } from './App';

function SignUp() {

    const {userData , setUserData} = useContext(DataProvider)   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState("");
    const [verify, setVerify] = useState("");
    function handleEmail(event) {
        setEmail(event.target.value);

    }

    const navigate = useNavigate();


    function handleName(event) {
        setName(event.target.value)
    }

    function handleConfirmPassword(event) {
        setConfirmPassword(event.target.value)
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    const data = { name, email, password};

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const response = await fetch('http://localhost:8080/signup', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const res = await response.json();
            setUserData(res.data);
            localStorage.setItem("user",JSON.stringify(res.data))
            alert(res.msg);
            navigate('/')

        } else {
            setStatus("Password mismatch");
        }


    }

    return (
        <>
            <Navbar/>

            <div className="container m-auto justify-content-center orderHeading  py-1 text-center ">
                <h3 className='text-danger'>{status}{verify}</h3>
            </div>

            <div className=" container m-auto  orderHeading  py-1 text-center">
                <h3>Please SignUp</h3>
            </div>

            <form method='post' onSubmit={handleSubmit}>

                <div className="row justify-content-center">
                    <div className="login col-10 col-lg-3 col-md-8 col-sm-10 justify-content-center d-flex">

                        <div className="signUpPage col-10 col-lg-3 rounded col-md-8 col-sm-10 shadow rounded py-4 ">
                            <div className="m-3">
                                <i className="fa-solid fa-user icon mx-2"></i>
                                <input type="text" onChange={handleName} className="form-control" autoFocus="on" placeholder="Username" />
                            </div>
                            <div className="m-3">
                                <i className="fa-solid fa-envelope icon mx-2"></i>
                                <input type="email" onChange={handleEmail} className="form-control" autoComplete='off' placeholder="User email" />
                            </div>
                            <div className="m-3">
                                <i className="fa-solid fa-key icon mx-2"></i>
                                <input type="password" onChange={handlePassword} className="form-control" placeholder=" User password" />
                            </div>
                            <div className="m-3">
                                <i className="fa-solid fa-key icon mx-2"></i>
                                <input type="password" onChange={handleConfirmPassword} className="form-control " placeholder="Confirm password" />

                            </div>

                            <div className="container w-100 text-center">
                                <input type="submit" className="btn btn-outline-primary  m-1" value="SignUp" />
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </>
    )
}

export default SignUp