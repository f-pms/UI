import { TABLE_PART_3 } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart3/tableValuesPart3';
import { ElectricalMeterReadingTable } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable';

export interface ITablePart3Props {}

export function TablePart3() {
  return <ElectricalMeterReadingTable tableData={TABLE_PART_3} />;
}
