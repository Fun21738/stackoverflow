import React from 'react'
import Navbar from "./Navbar";
import "./Login.css"

function Login() {
  return (
    <div>
        <Navbar/>
        <div className='cont'>
            <h3 className='hd'>welcome back ! we missed you</h3>
            <div className='inn'>
                <input type="text"  placeholder='username' className='one'/>
                <input type="text" placeholder='input your email' className='one'/>
                <input type="password" placeholder='password' className='one'/>
                <button >Enter</button>
            </div>
          
        </div>
    </div>
  )
}

export default Login