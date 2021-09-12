import React from 'react'
import { useDispatch } from "react-redux";
import { login } from '../../reducers/authReducer';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login());
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
