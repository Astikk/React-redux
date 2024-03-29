import { configureStore, createSlice } from "@reduxjs/toolkit";;

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter: 10},
    reducers: {
        increment(state, action){
            state.counter++;
        },
        decrement(state, action){
            state.counter--;
        },
        addby(state, action){
            state.counter += action.payload;
        }
    }
})

export const actions = counterSlice.actions;

export const store = configureStore({
    reducer: counterSlice.reducer,
})