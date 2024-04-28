import { useFormContext } from 'react-hook-form';

import { AddressUpdateBasicFormData } from '~/pages/ProductionManagement/helpers/addressUpdateForm';

import { InputWithLabel } from '~/components';

export interface OffsetInputProps {}

export default function OffsetInput() {
  const {
    control,
    formState: { errors },
    clearErrors,
  } = useFormContext<AddressUpdateBasicFormData>();

  return (
    <InputWithLabel
      clearErrors={clearErrors}
      control={control}
      description='Offset'
      error={errors.offset}
      name='offset'
      type='number'
    />
  );
}
