import { TABLE_PART_1 } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart1/tableValuesPart1';
import { ElectricalMeterReadingTable } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable';

export interface ITablePart1Props {}

export function TablePart1() {
  return <ElectricalMeterReadingTable tableData={TABLE_PART_1} />;
}
