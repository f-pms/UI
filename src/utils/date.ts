import { format, isExists, isValid, parse } from 'date-fns';

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

export const toISOStringWithoutTimeZone = (date: Date) => {
  return format(date, "yyyy-MM-dd'T'HH:mm:ss.000'+07:00'");
};

export const propertyToDisableToday = () => {
  const today = new Date();
  today.setDate(today.getDate() - 1);

  return today;
};

export const convertDateRange = (startDate?: Date, endDate?: Date) => {
  if (!startDate || !endDate) {
    return {
      start: toISOStringWithoutTimeZone(new Date()),
      end: toISOStringWithoutTimeZone(new Date()),
    };
  }

  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 0, 0);
  return {
    start: toISOStringWithoutTimeZone(startDate),
    end: toISOStringWithoutTimeZone(endDate),
  };
};
