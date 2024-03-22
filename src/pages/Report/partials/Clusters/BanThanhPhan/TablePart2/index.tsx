import { TABLE_PART_2 } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart2/tableValuesPart2';
import { ElectricalMeterReadingTable } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable';

export function TablePart2() {
  return <ElectricalMeterReadingTable tableData={TABLE_PART_2} />;
}
