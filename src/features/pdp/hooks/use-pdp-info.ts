import { useAppSelector } from '@/libs/store.ts';
import { pdpSelectors } from '@/features/pdp/slices';

export const usePdpInfo = () => {
  return useAppSelector(pdpSelectors.getPdp);
};
