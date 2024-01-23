import { DateRangeProvider } from '~/components/DateRangePicker/context/DateRangeContext';
import { CustomInputField } from '~/components/DateRangePicker/CustomInputField';

export const DateRangePicker = () => {
  return (
    <DateRangeProvider>
      <CustomInputField />
    </DateRangeProvider>
  );
};
