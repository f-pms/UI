import { useSearchParams } from 'react-router-dom';

import { ReportDetails, Shift } from '~/types';

import SubTable from '~/pages/Report/partials/Clusters/BanThanhPham/SubTablesPart4/SubTable';

import { Stack } from '~/components/MuiComponents';

export interface ISubTablePart4Props {
  report: ReportDetails;
}

export function SubTablePart4(props: Readonly<ISubTablePart4Props>) {
  const { report } = props;
  const [searchParams] = useSearchParams();
  const shift = searchParams.get('shift') as Shift;

  const sum = shift === Shift.MORNING ? report.sums[0] : report.sums[1];
  const factor =
    shift === Shift.MORNING ? report?.factors[0] : report?.factors[1];

  return (
    <Stack direction='row' mt={2} spacing={4}>
      <SubTable
        orderNumber='(16(b)=(a)*(15)'
        rows={[
          {
            label: 'Tổng số điện sử dụng khí nén cho SX thành phẩm',
            coefficient: (factor?.['FACTOR_BTP_CATEGORY_4.1'] ?? 0) * 100,
            value: sum?.['SUM_BTP_CATEGORY_4.1'] ?? 0,
          },
        ]}
        title='Tổng số điện sử dụng cho công đoạn SX thành phẩm'
      />
      <SubTable
        orderNumber='(16(c)=(a)*(15)'
        rows={[
          {
            label: 'Tổng số điện sử dụng khí nén cho SX bán thành phẩm',
            coefficient: (factor?.['FACTOR_BTP_CATEGORY_4.2'] ?? 0) * 100,
            value: sum?.['SUM_BTP_CATEGORY_4.2'] ?? 0,
          },
        ]}
        title='Tổng số điện sử dụng cho công đoạn SX bán thành phẩm'
      />
    </Stack>
  );
}
