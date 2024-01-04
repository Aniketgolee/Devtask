import React from 'react';
import {Route,useNavigate} from "react-router-dom"
import "./Home.css";

function Home(props) {
    const navigate = useNavigate();
    return (
        <div id="container">
            <div className='container-box'>
            <div className='wrap-box'>
                <h1 className='greet-name'>Welcome to PopX</h1>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className='button-edit'>
            <button className='create-button button-1'onClick={()=>navigate("/signup")}>Create Account</button>
            <button className='create-button button-2'onClick={()=>navigate("/signin")}>Already Registered? Login</button>
            </div>
            </div>
           
           

        </div>

    )
}

export default Home;