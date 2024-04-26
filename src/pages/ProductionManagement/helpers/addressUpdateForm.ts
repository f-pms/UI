import { number, object, ObjectSchema, string } from 'yup';

import { DataTypeEnum } from '~/services/blueprint/queries/useQueryBlueprintById';

export interface AddressUpdateBasicFormData {
  dataBlock: number;
  offset: number;
  dataType: DataTypeEnum;
}

export const AddressUpdateBasicSchema: ObjectSchema<AddressUpdateBasicFormData> =
  object().shape({
    dataBlock: number().required(),
    offset: number().required(),
    dataType: string().required(),
  });
