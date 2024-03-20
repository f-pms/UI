import { TABLE_PART_2 } from '~/pages/Report/partials/Clusters/CheBienDam/TablePart2/tableValuesPart2';
import { ElectricalMeterReadingTable } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable';

export interface ITablePart2Props {}

export function TablePart2() {
  return <ElectricalMeterReadingTable tableData={TABLE_PART_2} />;
}
