import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from '../../reducers/authReducer';
import '../../firebase/config';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('fabio11c@hotmail.com');
    const [password, setPassword] = useState('betafit1234');
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        const auth = getAuth();
        signInWithEmailAndPassword(auth, userInput, password)
            .then(({user}) => {
                dispatch(login(user.uid));
            })
            .catch((error) => {
                alert(error.message);
                setLoading(false);
            });
    }

    const handleUserChange = (e) => {
        setUserInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='login'>
            <div className='section'>
                <h1 className='section__title'>Betafit</h1>
                <form 
                    onSubmit={handleSubmit}
                    className='section__form form'
                >
                    <input 
                        className='form__item input'
                        placeholder='User'
                        type='text'
                        autoComplete='off'
                        value={userInput}
                        onChange={handleUserChange}
                    />
                    <input 
                        className='form__item input'
                        placeholder='Password'
                        type='password'
                        autoComplete='off'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button 
                        className='form__item button'
                        disabled={loading}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
