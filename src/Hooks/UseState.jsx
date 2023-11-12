import React, { useState } from 'react';

const UseState = () => {
    const [user, setUser] = useState({ name: "masum", email: "masum@ahmed", phone: "01555" });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((values)=> ({ ...values, [name]:value }))
        console.log(value);
        
    }

    const message = " data has been updated" ;
    const handleSubmit = () => {
        
    }
    return (
        <div className='container p-5 m-5'>
            <h1> This is Use State Hook </h1>

            <h6> Name:  {user.name} </h6>
            <h6> Email: {user.email} </h6>
            <h6> Phone: {user.phone} </h6>

            <h1 className='bg-success'>  {message}   </h1>

            <form action="" onSubmit={handleSubmit}>
                <input type="text"
                    name='name'
                    value={user.name}
                    onChange={handleChange} /> <br />

                <input type="text"
                    name='email'
                    value={user.email}
                    onChange={handleChange} /> <br />

                <input type="text"
                    name='phone'
                    value={user.phone}
                    onChange={handleChange} /> <br />

                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UseState;