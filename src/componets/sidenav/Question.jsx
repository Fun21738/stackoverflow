import React from "react";
import Navbar from "../topnav/Navbar";
import "./Sidenav.css";
const Question = () => {
  return (
    <div>
      <Navbar />
      <div className="qiuz">
        <p>post a question</p>
        <textarea name="" id="" cols="30" className="tex" placeholder="please input your question here"></textarea>
        
        <button className="btn">submit</button>
      </div>
    </div>
  );
};

export default Question;
