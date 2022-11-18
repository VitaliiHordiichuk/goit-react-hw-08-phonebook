import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contactsApi';

const initialState = {
  items: [],
};

const contactsReducer = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.fulfilled](state, { payload }) {
      state.items = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items.push(payload);
    },
    [deleteContact.fulfilled](state, action) {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export default contactsReducer.reducer;
