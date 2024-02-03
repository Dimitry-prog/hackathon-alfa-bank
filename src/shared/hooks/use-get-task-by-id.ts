import { usePdpInfo } from '@/features/pdp/hooks/use-pdp-info.ts';

export function useGetTaskById(taskId: number) {
  const pdpInfo = usePdpInfo();

  if (!pdpInfo) {
    return { task: undefined };
  }

  const task = (pdpInfo.tasks || []).find(({ id }) => id === taskId);

  if (!task) {
    return { task: undefined };
  }

  return { task };
}
