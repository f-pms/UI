import { AlarmActionType } from '~/types';

import { SelectedMethodListItem } from '~/pages/AlarmManagement/partials/AlarmNotiForm/NotiMethodSelect/SelectedMethodListItem';

export interface IToastMethodProps {
  onRemoveAction: (value: AlarmActionType) => void;
}

export function PushMessageMethod({
  onRemoveAction,
}: Readonly<IToastMethodProps>) {
  return (
    <SelectedMethodListItem
      actionType={AlarmActionType.PUSH_MESSAGE}
      description='Tất cả mọi người đã cài đặt ứng dụng RMS-Mobile sẽ nhận được cảnh báo'
      title='Cảnh báo qua thiết bị di động'
      onRemoveAction={onRemoveAction}
    />
  );
}
