import { TemplateQueryType } from '@/features/template/types';

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

export const convertTemplateQuery = (query: TemplateQueryType): string => {
  const queryArray: string[] = [];

  for (const key in query) {
    const value = query[key as keyof TemplateQueryType];
    if (Array.isArray(value)) {
      value.forEach((value: number) => {
        queryArray.push(`${key}=${value}`);
      });
    } else if (value) {
      queryArray.push(`${key}=${value}`);
    }
  }

  const queryStr = queryArray.join('&');
  return queryStr ? `?${queryStr}` : '';
};

export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
