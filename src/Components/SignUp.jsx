import React from 'react';
import {Route,useNavigate} from "react-router-dom"
import TextField from '@mui/material/TextField';
import "./SignUp.css";


function SignUp() {
    const navigate = useNavigate();
    return (
        <>
            <div className='sign-container'>
                <h1 className='sign-heading'>Create your PopX account</h1>
                <div className='input-box'>
                    <div className='inputclass'>
                        <TextField
                            className='inputsize'
                            label="Full Name*"
                            id="outlined-size-small"
                            defaultValue="Marry Doe"
                            size="Normal"
                        />
                    </div>
                    <div className='inputclass'>
                        <TextField
                            className='inputsize'
                            label="Phone number*"
                            id="outlined-size-small"
                            defaultValue="Marry Doe"
                            size="Normal"
                        />
                    </div>
                    <div className='inputclass'>
                        <TextField
                            className='inputsize'
                            label="Email address*"
                            id="outlined-size-small"
                            defaultValue="Marry Doe"
                            size="Normal"
                        />
                    </div>
                    <div className='inputclass'>
                        <TextField
                            className='inputsize'
                            label="Password*"
                            id="outlined-size-small"
                            defaultValue="Marry Doe"
                            size="Normal"
                        />
                    </div>
                    <div className='inputclass'>
                        <TextField
                            className='inputsize'
                            label="Company name"
                            id="outlined-size-small"
                            defaultValue="Marry Doe"
                            size="Normal"
                        />
                    </div>
                </div>
                <div>
                    <p>Are you an Agency?<span>*</span></p>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" for="inlineRadio1">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label" for="inlineRadio2">No</label>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary signup-button" type="button" onClick={()=>navigate("/account")}>Create Account</button>
                </div>

            </div>
        </>
    )
}

export default SignUp;