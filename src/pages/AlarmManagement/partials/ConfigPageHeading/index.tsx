import { CreateAlarmDialog } from '~/pages/AlarmManagement/partials/CreateAlarmDialog';

import { SectionHeading } from '~/components';

export function ConfigPageHeading() {
  return (
    <SectionHeading
      actions={<CreateAlarmDialog />}
      description='Giám sát tình trạng kết nối, nhiệt độ và thông số kĩ thuật của các cụm, trạm, máy,...'
      divider={true}
      header='Cấu hình cảnh báo'
    />
  );
}
