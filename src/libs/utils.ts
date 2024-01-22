export function selectStatus(str: string) {
  switch (str.toLocaleLowerCase()) {
    case 'заявка':
      return 'status_order';
    case 'в работе':
      return 'status_in-work';
    case 'отменена':
      return 'status_canceled';
    case 'выполнена':
      return 'status_completed';
    default:
      return '';
  }
}

export const formattedDate = (date: number): string => {
  const newDate = new Date(date);
  const option: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  return newDate.toLocaleString('ru-Ru', option);
};
