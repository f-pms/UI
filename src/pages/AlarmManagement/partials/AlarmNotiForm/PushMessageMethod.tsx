import { AlarmActionType } from '~/types';

import { MethodOption } from '~/pages/AlarmManagement/partials/AlarmNotiForm/MethodOption';

export interface IToastMethodProps {
  onRemoveAction: (value: AlarmActionType) => void;
}

export function PushMessageMethod({ onRemoveAction }: IToastMethodProps) {
  return (
    <MethodOption
      actionType={AlarmActionType.PUSH_MESSAGE}
      description='Tất cả mọi người đã cài đặt ứng dụng PMS-Mobile sẽ nhận được cảnh báo'
      title='Cảnh báo qua thiết bị di động'
      onRemoveAction={onRemoveAction}
    />
  );
}
