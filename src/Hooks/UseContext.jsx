import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext() ;
const UseContext = () => {
    const [ welcome, setWelcome ] = useState("Hello masum");
 const [user, setUser] = useState([ "potato" , "Atta", " Onion ", "sugar"])

    return (
        <UserContext.Provider value={user}>
        <div className='container m-5 p-5 border border-4'>
            <h1> This is main Component </h1> 
            <h2> {` ${welcome}, This is ending of this week`} </h2>
            <h2> {` ${user}, This is Main component`} </h2>

            <Component2 msg={welcome}></Component2>
        </div>
        </UserContext.Provider>
    );
};

export default UseContext;


const Component2 = ({msg}) => {
    const newMsg = 'kire mama';
    return (
        <div className='container m-5 p-5 border border-4'>
        <h2> Component 2 : {msg} </h2>

        <Component3 data={msg}
                    newMsg={newMsg}
        ></Component3>
        </div>
    )
}


const Component3 = ({data, newMsg}) => {
    const myuser = useContext(UserContext)
    return (
        <div className='container m-5 p-5 border border-4'>
        <h2> Component 3 : {data} 
       Component 3 : {newMsg} </h2>  <br />

            <h5> {myuser[3]} </h5>
        </div>
    )
}

