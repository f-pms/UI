import { number, object, ObjectSchema, string } from 'yup';

export interface CreateSensorConfigDTO {
  address: string;
  x?: number;
  y?: number;
}

export const sensorConfigSchema: ObjectSchema<CreateSensorConfigDTO> = object({
  address: string().required('Địa chỉ biến không được để trống'),
  x: number()
    .test({
      name: 'y',
      exclusive: false,
      params: {},
      message: 'Toa độ x không được phép để trống',
      test: function (value) {
        return !this.parent.y || (this.parent.y && value);
      },
    })
    .optional(),
  y: number()
    .test({
      name: 'x',
      exclusive: false,
      params: {},
      message: 'Toa độ y không được phép để trống',
      test: function (value) {
        return !this.parent.x || (this.parent.x && value);
      },
    })
    .optional(),
});

export const defaultSensorConfig: CreateSensorConfigDTO = {
  address: '',
};
