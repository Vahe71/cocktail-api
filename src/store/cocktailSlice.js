import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
    'cocktails/FetchCocktails',
    async (action) => {
        let response = null;
        if (action.type === "random") {
            response = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php');
        } else if (action.type === "search") {
            response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${action.value}`);;
        } else {
            console.error("Can not fetch cocktails.")
        }
        const data = await response.json();
        console.log(data)
        return data
    }
);

const initialState = {
    cocktails: [],
    status: null,
    error: null
};

const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCocktails.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCocktails.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.cocktails = action.payload;
            })
            .addCase(fetchCocktails.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error
            });
    }
});

export const getCocktails = (state) => state.cocktails.cocktails;

export default cocktailSlice.reducer












