import React from 'react'
import Navbar from "./Navbar";
import "./Login.css"

function Sign() {
  return (
    <div>
        <Navbar/>
        <div className='cont'>
            <h3 className='hd'>sign up for you better ways of in solving code problems</h3>
            <div className='inn'>
                <input type="text"  placeholder='username' className='one'/>
                <input type="text" placeholder='input your email' className='one'/>
                <input type="password" placeholder='password' className='one'/>
                <input type="password" placeholder='confirm password' className='one'/>
                <button >Enter</button>
            </div>
          
        </div>
    </div>
  )
}

export default Sign;