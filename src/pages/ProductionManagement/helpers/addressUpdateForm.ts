import { mixed, number, object, ObjectSchema } from 'yup';

import { DataTypeEnum } from '~/services/blueprint/queries/useQueryBlueprintById';

export interface AddressUpdateBasicFormData {
  dataBlock: number;
  offset: number;
  dataType: DataTypeEnum;
}

export const AddressUpdateBasicSchema: ObjectSchema<AddressUpdateBasicFormData> =
  object().shape({
    dataBlock: number()
      .typeError('Data Block không được phép để trống')
      .positive('Data Block phải là số nguyên dương')
      .integer('Data Block phải là số nguyên dương')
      .required('Data Block không được phép để trống'),
    offset: number()
      .typeError('Offset không được phép để trống')
      .positive('Offset phải là số nguyên dương')
      .required('Offset không được phép để trống'),
    dataType: mixed<DataTypeEnum>()
      .required('Kiểu dữ liệu không được phép để trống')
      .oneOf(Object.values(DataTypeEnum)),
  });
