import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from './cocktailSlice'


const store = configureStore({
    reducer: {
        cocktails: cocktailReducer
    }
});


export default store










