import { AlarmActionType } from '~/types';

import { MethodOption } from '~/pages/AlarmManagement/partials/AlarmNotiForm/MethodOption';

export interface IToastMethodProps {
  onRemoveAction: (value: AlarmActionType) => void;
}

export function ToastMethod({ onRemoveAction }: IToastMethodProps) {
  return (
    <MethodOption
      actionType={AlarmActionType.POPUP}
      description='Tất cả mọi người đều có thể xem cảnh báo'
      title='Hiện cảnh báo ở trang "Giám sát"'
      onRemoveAction={onRemoveAction}
    />
  );
}
