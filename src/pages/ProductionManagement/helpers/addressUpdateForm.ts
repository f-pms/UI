import { mixed, number, object, ObjectSchema, string } from 'yup';

import { DataTypeEnum } from '~/services/blueprint/queries/useQueryBlueprintById';

export interface AddressUpdateBasicFormData {
  dataBlock: number;
  offset: number;
  dataType: DataTypeEnum;
}

export interface AddressUpdateAdvanceFormData {
  address: string;
}

export const AddressUpdateBasicSchema: ObjectSchema<AddressUpdateBasicFormData> =
  object().shape({
    dataBlock: number()
      .typeError('Data Block không được để trống')
      .positive('Data Block phải là số nguyên dương')
      .integer('Data Block phải là số nguyên dương')
      .required('Data Block không được để trống'),
    offset: number()
      .typeError('Offset không được để trống')
      .positive('Offset phải là số nguyên dương')
      .required('Offset không được để trống'),
    dataType: mixed<DataTypeEnum>()
      .required('Kiểu dữ liệu không được để trống')
      .oneOf(Object.values(DataTypeEnum)),
  });

export const AddressUpdateAdvanceSchema: ObjectSchema<AddressUpdateAdvanceFormData> =
  object().shape({
    address: string()
      .matches(/^%DB\d+:\d+(\.\d+)?:\S+$/, 'Địa chỉ phải có định dạng theo mẫu')
      .required('Địa chỉ không được để trống'),
  });
