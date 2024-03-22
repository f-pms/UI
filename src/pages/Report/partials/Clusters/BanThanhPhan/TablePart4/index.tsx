import { TABLE_PART_4 } from '~/pages/Report/partials/Clusters/BanThanhPhan/TablePart4/tableValuesPart4';
import { ElectricalMeterReadingTable } from '~/pages/Report/partials/Tables/ElectricalMeterReadingTable';

export function TablePart4() {
  return <ElectricalMeterReadingTable tableData={TABLE_PART_4} />;
}
