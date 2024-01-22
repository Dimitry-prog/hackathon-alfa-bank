export function selectStatus(str: string) {
  switch (str.toLocaleLowerCase()) {
    case 'заявка':
      return 'status_order';
    case 'в работе':
      return 'status_in-work';
    case 'отменена':
      return 'status_canceled';
    case 'исполнена':
      return 'status_completed';
    default:
      return '';
  }
}
