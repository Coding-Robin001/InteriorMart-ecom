import { configureStore } from '@reduxjs/toolkit'

import CartSlice from './slices/CartSlice';
import ProductSlice from './slices/ProductSlice';


const store = configureStore({
    reducer: {
        cart: CartSlice,
        products: ProductSlice
    }
});

export default store;