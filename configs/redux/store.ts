import { configureStore } from "@reduxjs/toolkit";
import { clientSlice } from "./client-slice";

export const store =configureStore({
    reducer:{
        client: clientSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>