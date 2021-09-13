import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import sidebarReducer from "./sidebarReducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        sidebar: sidebarReducer
    }
})