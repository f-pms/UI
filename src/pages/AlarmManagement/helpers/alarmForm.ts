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
  AlarmNoti,
  AlarmSeverity,
  AlarmType,
  SensorConfig,
  Station,
} from '~/types';

interface AlarmInfoFromData extends Omit<AlarmInfo, 'id' | 'sensorConfigId'> {
  sensorConfig: SensorConfig | null;
  station: Station | null;
}

export interface AlarmFormData {
  info: AlarmInfoFromData;
  noti: AlarmNoti;
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
    }).required('Hãy chọn địa chỉ biến'),
    station: object({
      id: string().required(),
      name: string().required(),
    }).required('Hãy chọn trạm'),
    severity: mixed<AlarmSeverity>()
      .required()
      .oneOf(Object.values(AlarmSeverity)),
    checkInterval: number()
      .required()
      .positive()
      .max(100, 'Chu kì kiểm tra không vượt quá 100(giây)')
      .integer(),
    timeDelay: number()
      .required()
      .positive()
      .max(100, 'Độ trễ không vượt quá 100(giây)')
      .integer(),
    isEnabled: boolean().required(),
    min: number().positive().max(100).optional(),
    max: number().positive().max(100).optional(),
  }),
  noti: object({
    message: string().required(),
    actions: array()
      .of(
        object({
          actionId: string().required(),
          actionType: mixed<AlarmActionType>()
            .required()
            .oneOf(Object.values(AlarmActionType)),
          recipientsId: array().of(string().required()).optional(),
        }),
      )
      .required(),
  }),
});
