import { useAppDispatch, useAppSelector } from '@/libs/store.ts';
import { modalActions, modalSelectors } from '@/shared/slices/modal-slice.ts';

export const useModal = () => {
  const modalInfo = useAppSelector(modalSelectors.getModalInfo);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(modalActions.closeModal());
  };

  const handleOpenModal = (name: string) => {
    dispatch(modalActions.openModal(name));
  };

  return {
    ...modalInfo,
    onOpen: handleOpenModal,
    onClose: handleCloseModal,
  };
};
