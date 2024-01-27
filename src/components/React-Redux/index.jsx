import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Increment,Decrement } from '../redux/action';
import './style.css'

export default function ReactRedux(){
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch();

    return(
        <div className='redux-main'>
            <h1>Counter with Redux</h1>
            <p>Count : {count}</p>
            <button onClick={()=>dispatch(Increment())}>Increment</button>
            <button onClick={()=>dispatch(Decrement())}>Decrement</button>

        </div>
    )
}

