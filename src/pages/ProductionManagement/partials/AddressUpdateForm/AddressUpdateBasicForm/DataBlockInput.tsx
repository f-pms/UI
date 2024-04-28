import { useFormContext } from 'react-hook-form';

import { AddressUpdateBasicFormData } from '~/pages/ProductionManagement/helpers/addressUpdateForm';

import { InputWithLabel } from '~/components';

export interface DataBlockInputProps {}

export default function DataBlockInput() {
  const {
    control,
    formState: { errors },
    clearErrors,
  } = useFormContext<AddressUpdateBasicFormData>();

  return (
    <InputWithLabel
      clearErrors={clearErrors}
      control={control}
      description='Data Block'
      error={errors.dataBlock}
      name='dataBlock'
      type='number'
    />
  );
}
