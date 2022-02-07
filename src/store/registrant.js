import { createSlice } from '@reduxjs/toolkit';

const registrantSlice = createSlice({
    name: 'registrant',
    initialState: {
        enteredName: '',
        enteredEmail: '',
        enteredPhoneNumber: '',
        enteredFullAddress: '',
        enteredCityName: '',
        enteredStateName: '',
        enteredZipCode: ''
    },
    reducers: {
        addRegistrant(state, action) {
            console.log(action.payload)
        },
        registrantInputs(state, action) {
            const {
                enteredName,
                enteredEmail,
                enteredPhoneNumber,
                enteredFullAddress,
                enteredCityName,
                enteredStateName,
                enteredZipCode
            } = action.payload;

            state.enteredName = enteredName;
            state.enteredEmail = enteredEmail;
            state.enteredPhoneNumber = enteredPhoneNumber;
            state.enteredFullAddress = enteredFullAddress;
            state.enteredCityName = enteredCityName;
            state.enteredStateName = enteredStateName;
            state.enteredZipCode = enteredZipCode;

        }
    }
});

export const registrantActions = registrantSlice.actions;

export default registrantSlice.reducer;