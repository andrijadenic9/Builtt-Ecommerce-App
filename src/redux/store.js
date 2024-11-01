import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import loaderReducer from './loaderSlice';

const store = configureStore({
    reducer: {
        cartStore: cartReducer,
        loaderStore: loaderReducer,
    },
});

export default store;
