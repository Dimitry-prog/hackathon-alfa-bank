import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalStateType = {
  name: string;
  isOpen: boolean;
};

const initialState: ModalStateType = {
  name: '',
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.name = '';
      state.isOpen = false;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.isOpen = true;
    },
  },
  selectors: {
    getModalName: (state) => state.name,
    isModalOpen: (state) => state.isOpen,
  },
});

export const {
  reducer: modalReducer,
  actions: modalActions,
  selectors: modalSelectors,
} = modalSlice;
