import SubTable from '~/pages/Report/partials/Clusters/BanThanhPhan/SubTablesPart4/SubTable';

import { Stack } from '~/components/MuiComponents';

export interface ISubTablePart4Props {}

export function SubTablePart4() {
  return (
    <Stack direction='row' mt={2} spacing={4}>
      <SubTable
        orderNumber='(16(b)=(a)*(15)'
        rows={[
          {
            label: 'Tổng số điện sử dụng khí nén cho SX thành phẩm',
            coefficient: 50,
            value: 1099,
          },
        ]}
        title='Tổng số điện sử dụng cho công đoạn SX thành phẩm'
      />
      <SubTable
        orderNumber='(16(c)=(a)*(15)'
        rows={[
          {
            label: 'Tổng số điện sử dụng khí nén cho SX bán thành phẩm',
            coefficient: 50,
            value: 1099,
          },
        ]}
        title='Tổng số điện sử dụng cho công đoạn SX bán thành phẩm'
      />
    </Stack>
  );
}
