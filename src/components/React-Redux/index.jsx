import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Increment,Decrement } from '../redux/action';

export default function ReactRedux(){
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch();

    return(
        <div className='redux-main' style={{
            color:'white',
            backgroundColor:'black',
            height:'100vh',
            padding:'20px'
        }}>
            <h1>Counter with Redux</h1>
            <p>Count : {count}</p>
            <button onClick={()=>dispatch(Increment())}>Increment</button>
            <button onClick={()=>dispatch(Decrement())}>Decrement</button>

        </div>
    )
}

