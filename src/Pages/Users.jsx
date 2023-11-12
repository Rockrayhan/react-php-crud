import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {

    useEffect(() => {
        window.scrollTo(0, 0);  // for getting at the top of the page
        alluser();
    }, []);

    const [isuser, setuser] = useState([]);

    const alluser = async (ids) => {
        try {
            axios.get(`http://localhost/wdpf55_react/react-app-3/API/users.php`)
                .then(res => {
                    console.log(res.data.userlist)
                    setuser(res.data.userlist);
                })
        } catch (error) { throw error; }
    }

    const deleteConfirm = (id) => {
        if (window.confirm("Are you sure?")) {
            deleteUser(id);
        }
    };


    const deleteUser = (id) => {
        try {
            axios.post(`http://localhost/wdpf55_react/react-app-3/API/delete.php`, {
                userids: id,
            })
                .then(res => {
                    setuser([]);
                    alluser();
                    return;
                })
        } catch (error) { throw error; }
    }


    return (
        <div  className='container d-flex flex-row-reverse justify-content-center m-4'>
             <div><Link to='/userinsert'> <button className='btn btn-warning p-3 m-5'> Insert User </button> </Link></div>
          <div>
          {
                isuser ? (
                    <div>
                        <h1> Here are All the users List </h1>
                        <table>
                            <tr className='border border-4 bg-info '>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                            {isuser.map(user => (
                                <tr key={user.user_id}>
                                    <td className='border border-2 m-2 p-2 bg-primary'>{user.user_id}</td>
                                    <td className='border border-2 m-2 p-2 bg-primary'>{user.name}</td>
                                    <td className='border border-2 m-2 p-2 bg-primary'>{user.email}</td>
                                    <td className='border border-2 m-2 p-2 bg-primary'>{user.date}</td>
                                    <td className='border border-2 m-2 p-2 bg-primary'>
                                        <button onClick={() => deleteConfirm(user.user_id)} className='btn btn-danger'> Delete </button>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                ) : (
                    <div className='container m-5 p-5'> <h1> No data Found </h1></div>
                )
            }
          </div>
        </div>
    )

}


export default Users;