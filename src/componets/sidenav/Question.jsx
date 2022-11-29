import React from 'react';
import Navbar from '../topnav/Navbar';
import "./Sidenav.css";
const  Question =()=> {
  return (
    <div>
     <Navbar/>
        <div className="qiuz">
            <p>post a question</p>
            <textarea
            className="tex"
            // id=""
            // name=""
            // value={postQuiestion}
            // onChange={onDescriptionChanged}
            placeholder="post your question here"
          />
        </div>
       
    </div>
  )
}

export default Question;