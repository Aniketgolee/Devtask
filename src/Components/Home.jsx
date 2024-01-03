import React from 'react'
import "./Home.css";

function Home() {
    return (
        <div id="container">
            <div className='container-box'>
            <div className='wrap-box'>
                <h1>Welcome to PopX</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className='button-edit'>
            <button className='create-button button-1'>Create Account</button>
            <button className='create-button button-2'>Already Registered? Login</button>
            </div>
            </div>
           
           

        </div>

    )
}

export default Home;