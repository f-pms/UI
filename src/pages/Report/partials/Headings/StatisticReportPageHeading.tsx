import { SectionHeading } from '~/components';

export function StatisticReportPageHeading() {
  return (
    <SectionHeading
      description='Giám sát tình trạng kết nối, nhiệt độ và thông số kĩ thuật của các cụm, trạm, máy'
      divider={true}
      header='Báo cáo thống kê'
    />
  );
}
