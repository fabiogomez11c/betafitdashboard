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
    }
});

export const selectSidebar = state => state.sidebar.isActive;
export const {changeStatus} = sidebarSlice.actions;
export default sidebarSlice.reducer;
