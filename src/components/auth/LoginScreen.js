import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from '../../reducers/authReducer';
import '../../firebase/config';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('fabio11c@hotmail.com');
    const [password, setPassword] = useState('fabio1991');

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, userInput, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential);
                dispatch(login());
                // ...
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleUserChange = (e) => {
        setUserInput(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
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
                        value={userInput}
                        onChange={handleUserChange}
                    />
                    <input 
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
