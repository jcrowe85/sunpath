import { createSlice } from '@reduxjs/toolkit';

const customFieldsSlice = createSlice({
    name: 'customFields',
    initialState: { isActive: false },
    reducers: {
        toggleCustomFields(state, action) {
            state.isActive = !state.isActive
        }
    }
});

export const customFieldsActions = customFieldsSlice.actions;

export default customFieldsSlice.reducer;