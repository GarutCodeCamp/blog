import { createSlice } from "@reduxjs/toolkit";

const intitalState = {
    auth: false,
}

const sliceFirebase = createSlice({
    name: 'firebase',
    initialState: intitalState,
    reducers: {
        auth: (state, action) => state.auth = action.payload 
    }
})

export const { auth } = sliceFirebase.actions;
export default sliceFirebase.reducer;
