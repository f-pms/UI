import { useFormContext } from 'react-hook-form';

import { AddressUpdateBasicFormData } from '~/pages/ProductionManagement/helpers/addressUpdateForm';

import { InputWithLabel } from '~/components';

export interface DataTypeInputProps {}

export default function DataTypeInput() {
  const {
    control,
    formState: { errors },
    clearErrors,
  } = useFormContext<AddressUpdateBasicFormData>();

  return (
    <InputWithLabel
      clearErrors={clearErrors}
      control={control}
      defaultValue={1}
      description='Kiểu dữ liệu'
      error={errors.dataBlock}
      name='dataType'
      type='text'
    />
  );
}
