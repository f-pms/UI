import { isExists, isValid, parse } from 'date-fns';

export const parseAndValidateDate = (dateText: string, format: string) => {
  const parsedDate = parse(dateText, format, new Date());
  const isValidDate =
    isValid(parsedDate) &&
    isExists(
      parsedDate.getFullYear(),
      parsedDate.getMonth(),
      parsedDate.getDate(),
    );
  return { isValidDate, parsedDate };
};
