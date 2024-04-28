import { useFormContext } from 'react-hook-form';

import { AddressUpdateAdvanceFormData } from '~/pages/ProductionManagement/helpers/addressUpdateForm';

import { InputWithLabel } from '~/components';

export interface AddressInputProps {}

export default function AddressInput() {
  const {
    control,
    formState: { errors },
    clearErrors,
  } = useFormContext<AddressUpdateAdvanceFormData>();

  return (
    <InputWithLabel
      clearErrors={clearErrors}
      control={control}
      description='Địa chỉ biến được định nghĩa theo mẫu: %DB{dataBlock}:{offset}:{dataType}'
      error={errors.address}
      name='address'
      placeholder='%DB1:1:REAL'
      type='text'
    />
  );
}
