import { Stack } from '@mui/material';

import { SubTable } from '~/pages/Report/partials/Clusters/CheBienDam/SubTablesPart2/SubTable';

export interface ISubTablesPart2Props {}

export function SubTablesPart2() {
  return (
    <Stack direction='row' mt={2} spacing={4}>
      <SubTable
        headers={[
          'Tổng số điện sử dụng cho công đoạn bán thành phần (BTP)',
          'Tổng số điện sử dụng (KWh)',
        ]}
        orderNumber='(16)'
        rows={[
          {
            label: 'Tổng số điện sử dụng (chi phí BTP):',
            items: [
              'Tủ điều khiển kho chứa dăm và băng tải cấp dăm lên hệ thống rửa dăm 2100MC01 & 2100MC02',
              'Tủ điều khiển hệ thống xử lý nước trung tâm',
              'Tủ nguồn UTCĐ, tủ chiếu sáng văn phòng xưởng, chiếu sáng nhà xưởng, thiết bị lạnh các phòng điện',
            ],
            value: 1099,
          },
        ]}
      />
      <SubTable
        headers={[
          'Tổng số điện sử dụng cho chi phí điện dùng chung (công ty)',
          'Tổng số điện sử dụng (KWh)',
        ]}
        orderNumber='(17)'
        rows={[
          {
            label: 'Tổng số điện sử dụng (chi phí dùng chung):',
            items: [
              'Tủ phân phối tổng khu vực bơm cấp nước thiết bị, PCCC thiết bị và PCCC nhà xưởng',
              'Tủ điện nhà văn phòng + căn tin',
              'Chiếu sáng an ninh sân đường nhà xưởng chính',
              'Tủ nguồn ưu tiên: UTB1-2-3, UTPL, UTCG',
              'Cấp nguồn tổng các tủ: Trụ đèn CS 15m, bơm nước tưới cây; Nguồn cấp khu bảo vệ cổng chính; Chiếu sáng nhà xe ô tô + tủ UT mài dao (không công tơ); Chiếu sáng phòng vận hành SR01&SR02',
            ],
            value: 1099,
          },
        ]}
      />
    </Stack>
  );
}
