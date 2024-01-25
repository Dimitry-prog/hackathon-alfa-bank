import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PdpType } from '@/features/pdp/types';

type PdpStateType = {
  pdp: PdpType | null;
};

const initialState: PdpStateType = {
  pdp: null,
};

const pdpSlice = createSlice({
  name: 'pdpSlice',
  initialState,
  reducers: {
    setPdp: (state, action: PayloadAction<PdpType>) => {
      state.pdp = action.payload;
    },
  },
  selectors: {
    getPdp: (state) => state,
  },
});

export const { actions: pdpActions, selectors: pdpSelectors } = pdpSlice;
