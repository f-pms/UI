import { format } from 'date-fns';
import vi from 'date-fns/locale/vi';

import { Box, Stack } from '@mui/material';

import { ReportKey, Shift } from '~/types';

import { EQUIPMENTS_TABLE } from '~/pages/Report/partials/Clusters/Total/equipmentsValues';
import { EquipmentTable } from '~/pages/Report/partials/Clusters/Total/EquipmentTable';
import { TotalTable } from '~/pages/Report/partials/Clusters/Total/TotalTable';

export interface ITotalProps {
  reportKey: ReportKey;
  unit: string;
  date: Date | string;
  data: {
    [Shift.MORNING]: {
      peakTimeValue: number;
      lowTimeValue: number;
      normalTimeValue: number;
      total: number;
      totalElectricalUsage: number;
      totalOutput: number;
    };
    [Shift.NIGHT]: {
      peakTimeValue: number;
      lowTimeValue: number;
      normalTimeValue: number;
      total: number;
      totalElectricalUsage: number;
      totalOutput: number;
    };
  };
}

export default function Total(props: ITotalProps) {
  const { reportKey, unit, date, data } = props;
  const headers = [
    'Loại',
    'Chỉ số điện',
    `Sản lượng (${unit.toLowerCase()}/ca)`,
    `Sử dụng điện (KWh/${unit.toLowerCase()})`,
  ];

  const getRows = (shift: Shift.MORNING | Shift.NIGHT) => [
    {
      name: 'Giờ cao điểm',
      value: data[shift].peakTimeValue,
    },
    {
      name: 'Giờ thấp điểm',
      value: data[shift].lowTimeValue,
    },
    {
      name: 'Giờ bình thường',
      value: data[shift].normalTimeValue,
    },
  ];

  const dateToText = format(new Date(date), 'PPPP', { locale: vi });
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' spacing={5}>
        <TotalTable
          headers={headers}
          rows={getRows(Shift.MORNING)}
          title={`I. Ca sáng (6h00-18h00): ${dateToText}`}
          total={data[Shift.MORNING].total}
          totalElectricalUsage={data[Shift.MORNING].totalElectricalUsage}
          totalOutput={data[Shift.MORNING].totalOutput}
        />
        <TotalTable
          headers={headers}
          rows={getRows(Shift.NIGHT)}
          title={`II. Ca tối (18h00-6h00): ${dateToText}`}
          total={data[Shift.NIGHT].total}
          totalElectricalUsage={data[Shift.NIGHT].totalElectricalUsage}
          totalOutput={data[Shift.NIGHT].totalOutput}
        />
      </Stack>
      <Box mt={5}>
        <EquipmentTable {...EQUIPMENTS_TABLE[reportKey]} />
      </Box>
    </Box>
  );
}
