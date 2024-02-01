import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PdpType } from '@/features/pdp/types';
import { pdpApi } from '@/features/pdp/services';

type PdpStateType = {
  pdp: PdpType | null;
};

const initialState: PdpStateType = {
  pdp: null,
};

export const pdpSlice = createSlice({
  name: 'pdpSlice',
  initialState,
  reducers: {
    setPdp: (state, action: PayloadAction<PdpType>) => {
      state.pdp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(pdpApi.endpoints.getPdpById.matchFulfilled, (state, { payload }) => {
      state.pdp = payload;
    });
  },
  selectors: {
    getPdp: (state) => state.pdp,
  },
});

export const { actions: pdpActions, selectors: pdpSelectors } = pdpSlice;
