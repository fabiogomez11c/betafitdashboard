import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export const LoginScreen = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='login'>
            <div className='section'>
                <h1>Betafit</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder='User'
                        type='text'
                        autoComplete='off'
                    />
                    <input 
                        placeholder='Password'
                        type='password'
                    />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}
