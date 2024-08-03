import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    reducer: { //changed to : from =
        user: userReducer,
    }
});

export default store;