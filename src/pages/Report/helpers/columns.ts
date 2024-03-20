import { ElectricalMeterReadingRowValues, Shift } from '~/types';

export type Checkpoint =
  | 'checkpoint1'
  | 'checkpoint2'
  | 'checkpoint3'
  | 'checkpoint4';

export type CheckpointTime = {
  [key in Shift]: {
    [key in Checkpoint]: string;
  };
};

export type ColumnReportTable = {
  id: string;
  header: string;
  width: number;
  accessorKey: keyof ElectricalMeterReadingRowValues;
  isMultiRLineInRow?: boolean;
  isMultiColumn?: boolean;
  subColumns?: object;
};

export const SHIFT_TIME: CheckpointTime = {
  [Shift.MORNING]: {
    checkpoint1: '6h00-9h30',
    checkpoint2: '9h30-13h00',
    checkpoint3: '13h00-17h00',
    checkpoint4: '17h00-16h00',
  },
  [Shift.NIGHT]: {
    checkpoint1: '18h00-20h00',
    checkpoint2: '20h00-22h00',
    checkpoint3: '22h00-4h00',
    checkpoint4: '4h00-6h00',
  },
  [Shift.ALL_DAY]: {
    checkpoint1: "6h00'-9h30'",
    checkpoint2: "9h30'-13h00'",
    checkpoint3: "13h00'-17h00'",
    checkpoint4: "17h00'-16h00'",
  },
};

export const CHECKPOINT_HEADERS = {
  checkpoint1: {
    newIndex: {
      label: 'Chỉ số mới',
      orderNumber: '(3)',
    },
    shift: 'Lần chốt 1',
    time: SHIFT_TIME[Shift.MORNING].checkpoint1,
    total: {
      label: 'Tổng(Gwh)',
      orderNumber: '(4)=(3)-(2)',
    },
  },
  checkpoint2: {
    newIndex: {
      label: 'Chỉ số mới',
      orderNumber: '(5)',
    },
    shift: 'Lần chốt 2',
    time: SHIFT_TIME[Shift.MORNING].checkpoint2,
    total: {
      label: 'Tổng(Gwh)',
      orderNumber: '(6)=(5)-(3)',
    },
  },
  checkpoint3: {
    newIndex: {
      label: 'Chỉ số mới',
      orderNumber: '(7)',
    },
    shift: 'Lần chốt 3',
    time: SHIFT_TIME[Shift.MORNING].checkpoint3,
    total: {
      label: 'Tổng(Gwh)',
      orderNumber: '(8)=(7)-(5)',
    },
  },
  checkpoint4: {
    newIndex: {
      label: 'Chỉ số mới',
      orderNumber: '(9)',
    },
    shift: 'Lần chốt 4',
    time: SHIFT_TIME[Shift.MORNING].checkpoint4,
    total: {
      label: 'Tổng(Gwh)',
      orderNumber: '(10)=(9)-(7)',
    },
  },
};

export const REPORT_TABLE_COLUMNS: ColumnReportTable[] = [
  {
    id: 'id',
    header: 'STT',
    width: 20,
    accessorKey: 'id',
  },
  {
    id: 'locationInfo',
    header: 'Thông tin vị trí sử dụng',
    width: 180,
    accessorKey: 'locationInfo',
  },
  {
    id: 'electricRoom',
    header: 'Phòng điện',
    width: 100,
    accessorKey: 'electricRoom',
  },
  {
    id: 'electricMeter',
    header: 'Vị trí đặt đồng hồ điện',
    width: 100,
    accessorKey: 'electricMeter',
    isMultiRLineInRow: true,
  },
  {
    id: 'equipments',
    header: 'Tên thiết bị sử dụng láp đồng hồ',
    width: 240,
    accessorKey: 'equipments',
    isMultiRLineInRow: true,
  },
  {
    id: 'meterMultiplier',
    header: 'Hệ số đồng hồ',
    width: 90,
    accessorKey: 'meterMultiplier',
    isMultiRLineInRow: true,
  },
  {
    id: 'oldElectricValue',
    header: 'Chỉ số cũ',
    width: 90,
    accessorKey: 'oldElectricValue',
    isMultiRLineInRow: true,
  },

  {
    id: 'checkpoint1',
    header: 'Lần chốt 1',
    width: 90,
    accessorKey: 'checkpoints',
    isMultiColumn: true,
  },
  {
    id: 'checkpoint2',
    header: 'Lần chốt 2',
    width: 90,
    accessorKey: 'checkpoints',
    isMultiColumn: true,
  },
  {
    id: 'checkpoint3',
    header: 'Lần chốt 3',
    width: 90,
    accessorKey: 'checkpoints',
    isMultiColumn: true,
  },
  {
    id: 'checkpoint4',
    header: 'Lần chốt 4',
    width: 90,
    accessorKey: 'checkpoints',
    isMultiColumn: true,
  },
  {
    id: 'checkpointTotal',
    header: 'Tổng số điện sử dụng (KWh)',
    width: 100,
    accessorKey: 'checkpointTotal',
    isMultiRLineInRow: true,
  },
];
