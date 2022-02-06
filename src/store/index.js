import { configureStore } from "@reduxjs/toolkit";
import customFieldsSlice from './custom-fields';
import registrantSlice from './registrant';

const store = configureStore({
    reducer: {
        customFieldsReducer: customFieldsSlice,
        registrantReducer: registrantSlice
    }
});

export default store;

