import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
    name:"client",
    initialState:{
        //auth
        isOpenLoginModal:false,
        isOpenSignupModal:false,

    },
    reducers:{
        //auth
        setIsOpenLoginModal(state, action) {
            state.isOpenLoginModal = action.payload
        },
        setIsOpenSignupModal(state, action) {
            state.isOpenSignupModal = action.payload
        },
    }
})

export const clientAction = clientSlice.actions