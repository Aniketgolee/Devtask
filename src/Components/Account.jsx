import React from 'react';
import "./Account.css";
import { FaCamera } from "react-icons/fa";

function Account() {
  return (
    <div className='account-container'>
        <h1 className='header-setting'>Account Settings</h1>
        <div className='box-contain'>
       <div className='profile-info'>
        <div>
        <img className='avatar' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="prfilepicture" />
        <div className='icon-background'>
        <FaCamera className='icon-image'/>
        </div>
        </div>
        

       
       <div className='avtar-info'>
        <h3>Marry Doe</h3>
        <p>Marry@Gmail.Com</p>
       </div>  
       </div>
       <p className='avatar-para'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam </p>
       <p className='dashed'></p>
       

      
        </div>
    </div>
  )
}

export default Account