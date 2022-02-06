import { createSlice } from '@reduxjs/toolkit';

const registrantSlice = createSlice({
    name: 'registrant',
    initialState: { name: '', phone: '', email: ''},
    reducers: {
        addRegistrant(state, action) {
            console.log(action.payload)
        }
    }
});

export const registrantActions = registrantSlice.actions;

export default registrantSlice.reducer;