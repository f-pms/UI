import {
  array,
  boolean,
  mixed,
  number,
  object,
  ObjectSchema,
  string,
} from 'yup';

import {
  AlarmInfoDTO,
  AlarmNotiDTO,
} from '~/services/alarm-condition/mutation/useCreateAlarmCondition';
import {
  AlarmActionType,
  AlarmSeverity,
  AlarmType,
  SensorConfiguration,
  Station,
} from '~/types';

import { TypeCondition } from '~/pages/AlarmManagement/partials/AlarmInfoForm/TypeConditionSelect';

export const NOTI_METHOD_OPTIONS = [
  {
    label: 'Hiện cảnh báo ở trang "Giám sát"',
    value: AlarmActionType.POPUP,
  },
  {
    label: 'Gửi cảnh báo qua email',
    value: AlarmActionType.EMAIL,
  },
  {
    label: 'Gửi cảnh báo tới thiết bị di động',
    value: AlarmActionType.PUSH_MESSAGE,
  },
];

interface AlarmInfoFormData
  extends Omit<AlarmInfoDTO, 'sensorConfigurationId'> {
  sensorConfig: SensorConfiguration | null;
  station: Station | null;
  id: number;
  typeCondition: TypeCondition;
}

export interface AlarmFormData {
  info: AlarmInfoFormData;
  noti: AlarmNotiDTO;
  isUpdate: boolean;
}

export const defaultAlarmFormData: AlarmFormData = {
  info: {
    id: 0,
    sensorConfig: null,
    station: null,
    type: AlarmType.PREDEFINED,
    severity: AlarmSeverity.URGENT,
    checkInterval: 1,
    timeDelay: 1,
    enabled: true,
    min: undefined,
    max: undefined,
    typeCondition: TypeCondition.RANGE,
  },
  noti: {
    message: '',
    actions: [],
  },
  isUpdate: false,
};

export const alarmSchema: ObjectSchema<AlarmFormData> = object().shape({
  info: object({
    id: number().required(),
    type: mixed<AlarmType>().required().oneOf(Object.values(AlarmType)),
    sensorConfig: object({
      id: number().required(),
      address: string().required(),
      x: number().required(),
      y: number().required(),
      attachedToAlarm: boolean().required(),
    }).required('Địa chỉ biến không được phép để trống'),
    station: object({
      id: number().required(),
      name: string().required(),
      value: string().required(),
      type: string().required(),
      typeLabel: string().required(),
    }).required('Trạm không được phép để trống'),
    severity: mixed<AlarmSeverity>()
      .required()
      .oneOf(Object.values(AlarmSeverity)),
    checkInterval: number()
      .typeError('Chu kì kiểm tra không được phép để trống')
      .required('Chu kì kiểm tra không được phép bỏ trống')
      .positive('Chu kì kiểm tra phải là số nguyên dương')
      .integer('Chu kì kiểm tra phải là số nguyên dương')
      .max(3600, 'Chu kì kiểm tra không được lớn hơn 3600 giây'),
    timeDelay: number()
      .typeError('Độ trễ không được phép để trống')
      .required('Độ trễ không được phép để trống')
      .positive('Độ trễ phải là số nguyên dương')
      .integer('Độ trễ phải là số nguyên dương')
      .max(3600, 'Độ trễ không được lớn hơn 3600 giây'),
    enabled: boolean().required(),
    min: number()
      .typeError('Giá trị tối thiểu không được phép để trống')
      .when('type', {
        is: AlarmType.CUSTOM,
        then: (schema) =>
          schema
            .test({
              name: 'max',
              exclusive: false,
              params: {},
              message: 'Giá trị tối thiểu phải nhỏ hơn giá trị tối đa',
              test: function (value) {
                if (this.parent.max && value) {
                  return value < this.parent.max;
                }
                return true;
              },
            })
            .test({
              name: 'typeCondition',
              exclusive: false,
              params: {},
              message: 'Giá trị tối thiểu không được phép để trống',
              test: function (value) {
                if (this.parent.typeCondition === TypeCondition.LESS_THAN) {
                  return true;
                }
                return value !== undefined;
              },
            }),
        otherwise: (schema) => schema.optional(),
      }),
    max: number()
      .typeError('Giá trị tối đa không được phép để trống')
      .when('type', {
        is: AlarmType.CUSTOM,
        then: (schema) =>
          schema
            .test({
              name: 'min',
              exclusive: false,
              params: {},
              message: 'Giá trị tối đa phải lớn hơn giá trị tối thiểu',
              test: function (value) {
                if (this.parent.min && value) {
                  return value > this.parent.min;
                }
                return true;
              },
            })
            .test({
              name: 'typeCondition',
              exclusive: false,
              params: {},
              message: 'Giá trị tối đa không được phép để trống',
              test: function (value) {
                if (this.parent.typeCondition === TypeCondition.GREATER_THAN) {
                  return true;
                }
                return value !== undefined;
              },
            }),
        otherwise: (schema) => schema.optional(),
      }),
    typeCondition: mixed<TypeCondition>().required(),
  }),
  noti: object({
    message: string().required('Nội dung cảnh báo không được để trống'),
    actions: array()
      .min(1, 'Ít nhất phải chọn một phương thức cảnh báo')
      .of(
        object({
          id: number().required(),
          type: mixed<AlarmActionType>()
            .required()
            .oneOf(Object.values(AlarmActionType)),
          recipients: array().of(string().required()).optional(),
        }),
      )
      .required('Ít nhất phải chọn một phương thức cảnh báo'),
  }),
  isUpdate: boolean().required(),
});
