import { object, ObjectSchema, string } from 'yup';

export interface CreateSensorConfigDTO {
  address: string;
}

export const sensorConfigSchema: ObjectSchema<CreateSensorConfigDTO> = object({
  address: string().required('Địa chỉ biến không được để trống'),
});

export const defaultSensorConfig: CreateSensorConfigDTO = {
  address: '',
};
