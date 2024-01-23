import { SectionHeading } from '~/components';
import { SettingsInputComponentOutlinedIcon } from '~/components/Icons';
import { Button } from '~/components/MuiComponents';

export default function SettingPageHeading() {
  return (
    <SectionHeading
      actions={
        <Button
          startIcon={<SettingsInputComponentOutlinedIcon />}
          variant='contained'
        >
          Thêm cấu hình
        </Button>
      }
      description='Giám sát tình trạng kết nối, nhiệt độ và thông số kĩ thuật của các cụm, trạm, máy,...'
      divider={true}
      header='Cấu hình cảnh báo'
    />
  );
}
