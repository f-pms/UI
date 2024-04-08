import { AlarmActionType } from '~/types';

import { SelectedMethodListItem } from '~/pages/AlarmManagement/partials/AlarmNotiForm/NotiMethodSelect/SelectedMethodListItem';

export interface IToastMethodProps {
  onRemoveAction: (value: AlarmActionType) => void;
}

export function ToastMethod({ onRemoveAction }: IToastMethodProps) {
  return (
    <SelectedMethodListItem
      actionType={AlarmActionType.POPUP}
      description='Tất cả mọi người đều có thể xem cảnh báo'
      title='Hiện cảnh báo ở trang "Giám sát"'
      onRemoveAction={onRemoveAction}
    />
  );
}
