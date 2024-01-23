import {
  ChangeEvent,
  KeyboardEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { vi } from 'date-fns/locale';

import { format } from '~/libs/date-fns';
import { parseAndValidateDate } from '~/utils/date';

import { DateRangeContext } from '~/components/DateRangePicker/context/DateRangeContext';

const formatDate = (date: Date | undefined) => {
  return format(date as Date, 'dd/MM/yyyy', { locale: vi });
};

const useDateInput = () => {
  const { range, setRange, setFocusedFromField, setFocusedToField } =
    useContext(DateRangeContext);
  const [fromText, setFromText] = useState(formatDate(range.from));
  const [toText, setToText] = useState(formatDate(range.from));

  const onFocusField = (field: 'from' | 'to') => {
    setFocusedFromField(field === 'from');
    setFocusedToField(field === 'to');
  };

  const onFieldChange = (
    field: 'from' | 'to',
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    if (field === 'from') {
      setFromText(e.target.value);
    } else if (field === 'to') {
      setToText(e.target.value);
    }
  };

  const onBlurredFromField = () => {
    const { isValidDate, parsedDate } = parseAndValidateDate(
      fromText,
      'dd/MM/yyyy',
    );
    if (isValidDate && parsedDate <= (range.to as Date)) {
      setRange({ ...range, from: parsedDate });
    } else {
      setFromText(formatDate(range.from));
    }
  };

  const onBlurredToField = () => {
    const { isValidDate, parsedDate } = parseAndValidateDate(
      toText,
      'dd/MM/yyyy',
    );

    if (isValidDate && parsedDate >= (range.from as Date)) {
      setRange({ ...range, to: parsedDate });
    } else {
      setToText(formatDate(range.to));
    }
  };

  const handleKeyDown = (
    field: 'to' | 'from',
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      if (field === 'from') {
        onBlurredFromField();
      } else if (field === 'to') {
        onBlurredToField();
      }
    }
  };

  useEffect(() => {
    setFromText(formatDate(range.from));
    setToText(formatDate(range.to));
  }, [range]);

  return {
    fromText,
    toText,
    onFocusField,
    onFieldChange,
    onBlurredFromField,
    onBlurredToField,
    handleKeyDown,
  };
};

export default useDateInput;
