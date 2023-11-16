import axios from 'axios';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';


const Userinsert = () => {
    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("submitted");
        userInsert();
    }
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo(val => ({ ...val, [name]: value }));
    }
    
    const userInsert = () => {
        axios.post("http://localhost/wdpf55_react/react-app-3/API/userInsert.php", 
        { data:userInfo }).then(res => {
            // alert(" Something returned ") ;
            alert(res.data.msg);
            navigate("/users");
        })
    }

    console.log(userInfo);
    
    return (
        <div className='container m-5 p-5 text-center'>
            <h1> Insert User </h1>

            <form action="" onSubmit={handleSubmit} className='border border-3 p-5 bg-dark'>

                <input className='bg-primary w-50 p-2' onChange={handleChange}
                    name='name'
                    value={userInfo.name}
                    placeholder='Enter Name' type="text" /> <br />

                <input className='bg-primary mt-3 mb-3 w-50 p-2'
                    onChange={handleChange}
                    name='email'
                    value={userInfo.email}
                    type="email" placeholder='Enter Email' /> <br />

                <input className='bg-primary p-2 w-25 fw-bold' type="submit" name='submit' />
            </form>
        </div>
    );
};

export default Userinsert;