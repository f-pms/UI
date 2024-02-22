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

export const NOTI_METHOD_OPTIONS = [
  {
    label: 'Hiện cảnh báo ở trang "Giám sát"',
    value: AlarmActionType.POPUP,
  },
  {
    label: 'Gửi cảnh báo qua email',
    value: AlarmActionType.EMAIL,
  },
];

interface AlarmInfoFromData
  extends Omit<AlarmInfoDTO, 'sensorConfigurationId'> {
  sensorConfig: SensorConfiguration | null;
  station: Station | null;
}

export interface AlarmFormData {
  info: AlarmInfoFromData;
  noti: AlarmNotiDTO;
  isUpdate: boolean;
}

export const defaultAlarmFormData: AlarmFormData = {
  info: {
    sensorConfig: null,
    station: null,
    type: AlarmType.PREDEFINED,
    severity: AlarmSeverity.URGENT,
    checkInterval: 1,
    timeDelay: 1,
    enabled: true,
    min: undefined,
    max: undefined,
  },
  noti: {
    message: '',
    actions: [],
  },
  isUpdate: false,
};

export const alarmSchema: ObjectSchema<AlarmFormData> = object().shape({
  info: object({
    type: mixed<AlarmType>().required().oneOf(Object.values(AlarmType)),
    sensorConfig: object({
      id: number().required(),
      address: string().required(),
      x: string().required(),
      y: string().required(),
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
      .required('Chu kì kiểm tra không được phép bỏ trống')
      .positive('Chu kì kiểm tra phải là số nguyên dương')
      .integer('Chu kì kiểm tra phải là số nguyên dương'),
    timeDelay: number()
      .required('Độ trễ không được phép để trống')
      .positive('Độ trễ phải là số nguyên dương')
      .integer('Độ trễ phải là số nguyên dương'),
    enabled: boolean().required(),
    min: number().optional(),
    max: number().optional(),
  }),
  noti: object({
    message: string().required('Nội dung cảnh báo không được để trống'),
    actions: array()
      .of(
        object({
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
