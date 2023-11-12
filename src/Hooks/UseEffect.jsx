import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState(5)

    useEffect(() => {

        setPerson(count + 1);

    },[])

    return (
        <div className='container mt-5'>
            <h2> Use Effect Page </h2>
            <h1> state: {count} </h1>
            <h1> Person: {person} </h1>

            <button onClick={()=>setCount( ()=> count + 1  ) }> Click here  </button>
        </div>
    );
};

export default UseEffect;