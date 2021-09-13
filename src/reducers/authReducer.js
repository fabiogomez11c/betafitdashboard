import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: ''
    },
    reducers: {
        login: state => {
            state.value = '123456';
        }, 
        logout: state => {
            state.value = '';
        }
    }
});

export const selectAuth = state => state.auth.value;
export const {login, logout} = authSlice.actions;
export default authSlice.reducer
