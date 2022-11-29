import React from 'react'
import Navbar from "./Navbar";
import "./Home.css"
import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';


function Home() {
// const { EveraskedQ } = useSelector((state) => state.EveraskedQ)

  return (
    <div>
        <Navbar/>
        <div className='bp'>
            <div className="side">
                <h3 className="other">Others</h3>
                <div className="mac">
                    <Link to="/EveraskedQ" className="hp"> Eversked Questions 
                    <span>{0}</span>
                    </Link>
                    <Link to="/Question" className="hp">Post a question</Link>
                </div>
            </div>
            
            <div className="main">
                <h5 className='post'>Posted questions and answers !! </h5>
                <div className='mag'>
                    <p>posted question</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;