import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isActive: true 
    },
    reducers: {
        changeStatus: state => {
            state.isActive = !state.isActive;
        },
        activate: state => {
            state.isActive = true
        }
    }
});

export const selectSidebar = state => state.sidebar.isActive;
export const {changeStatus, activate} = sidebarSlice.actions;
export default sidebarSlice.reducer;
