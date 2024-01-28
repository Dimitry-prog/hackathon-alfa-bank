import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TemplateType } from '@/features/template/types';

type TemplateStateType = {
  template: TemplateType | null;
};

const initialState: TemplateStateType = {
  template: null,
};

const templateSlice = createSlice({
  name: 'templateSlice',
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<TemplateType>) => {
      state.template = action.payload;
    },
  },
  selectors: {
    getTemplate: (state) => state.template,
  },
});

export const { actions: templateActions, selectors: templateSelectors } = templateSlice;
