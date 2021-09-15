import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: ''
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        }, 
        logout: state => {
            state.value = '';
        }
    }
});

export const selectAuth = state => state.auth.value;
export const {login, logout} = authSlice.actions;
export default authSlice.reducer
