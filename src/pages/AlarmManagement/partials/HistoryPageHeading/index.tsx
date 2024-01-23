import { SectionHeading } from '~/components';

export default function HistoryPageHeading() {
  return (
    <SectionHeading
      description='Giám sát tình trạng kết nối, nhiệt độ và thông số kĩ thuật của các cụm, trạm, máy,...'
      divider={true}
      header='Lịch sử cảnh báo'
    />
  );
}
