import { AxiosError } from 'axios';

import { ErrorDataResponse } from '~/types/request';

export const displayErrorMessage = (error: AxiosError | Error | null) => {
  if (!error) return '';

  const errorResponse = (
    (error as AxiosError)?.response?.data as ErrorDataResponse
  )?.error;

  const { message, data } = errorResponse;

  if (typeof data === 'string') return data;

  return message;
};
