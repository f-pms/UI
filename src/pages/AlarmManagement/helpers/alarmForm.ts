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
  AlarmActionType,
  AlarmInfo,
  AlarmSeverity,
  AlarmType,
  CreateAlarmNoti,
  SensorConfig,
  Station,
} from '~/types';

export const NOTI_METHOD_OPTIONS = [
  {
    label: 'Hiện cảnh báo ở trang "Giám sát"',
    value: AlarmActionType.TOAST,
  },
  {
    label: 'Gửi cảnh báo qua email',
    value: AlarmActionType.EMAIL,
  },
];

interface AlarmInfoFromData extends Omit<AlarmInfo, 'id' | 'sensorConfigId'> {
  sensorConfig: SensorConfig | null;
  station: Station | null;
}

export interface AlarmFormData {
  info: AlarmInfoFromData;
  noti: CreateAlarmNoti;
}

export const defaultAlarmFormData: AlarmFormData = {
  info: {
    sensorConfig: null,
    station: null,
    type: AlarmType.PRE_DEFINED,
    severity: AlarmSeverity.CRITICAL,
    checkInterval: 1,
    timeDelay: 1,
    isEnabled: true,
    min: undefined,
    max: undefined,
  },
  noti: {
    message: '',
    actions: [],
  },
};

export const alarmSchema: ObjectSchema<AlarmFormData> = object().shape({
  info: object({
    type: mixed<AlarmType>().required().oneOf(Object.values(AlarmType)),
    sensorConfig: object({
      id: string().required(),
      address: string().required(),
    }).required('Địa chỉ biến không được phép để trống'),
    station: object({
      id: string().required(),
      name: string().required(),
    }).required('Tên trạm không được phép để trống'),
    severity: mixed<AlarmSeverity>()
      .required()
      .oneOf(Object.values(AlarmSeverity)),
    checkInterval: number()
      .required('Chu kì kiểm tra không được phép bỏ trống')
      .positive('Chu kì kiểm tra phải là số nguyên dương')
      .integer('Chu kì kiểm tra phải là số nguyên dương'),
    timeDelay: number()
      .required('Độ trễ không được phép để trống')
      .positive('Độ trễ phải là số nguyên dương')
      .integer('Độ trễ phải là số nguyên dương'),
    isEnabled: boolean().required(),
    min: number().optional(),
    max: number().optional(),
  }),
  noti: object({
    message: string().required('Nội dung cảnh báo không được để trống'),
    actions: array()
      .of(
        object({
          actionType: mixed<AlarmActionType>()
            .required()
            .oneOf(Object.values(AlarmActionType)),
          recipientsId: array().of(string().required()).optional(),
        }),
      )
      .required('Ít nhất phải chọn một phương thức cảnh báo'),
  }),
});
