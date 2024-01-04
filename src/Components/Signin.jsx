import React from 'react';
import {Route,useNavigate} from "react-router-dom"
import TextField from '@mui/material/TextField';
import "./Signin.css";

function Signin() {
    const navigate = useNavigate();
    return (
        <>
            <div className='sign-container'>
                <h1 className='sign-headline'>Signin to your PopX account</h1>
                <p className='sign-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                <form>
                    <div className='inputclass'>
                        <TextField
                            className='inputsize'
                            label="Email Address"
                            id="outlined-size-small"
                            placeholder='Enter email address '
                            size="Normal"
                        />
                    </div>
                    <div className='inputclass'>
                        <TextField
                            className='inputsize'
                            label="Password"
                            id="outlined-size-small"
                            placeholder='Enter Password'
                            size="Normal"
                        />
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary signin-button" type="button" onClick={()=>navigate("/account")}>Login</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Signin