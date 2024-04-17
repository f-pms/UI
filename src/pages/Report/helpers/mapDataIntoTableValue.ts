import {
  ElectricalMeterReadingTableValues,
  ReportDetails,
  ReportKey,
  RowsMap,
  Shift,
} from '~/types';
import { formatNumber } from '~/utils';

export const mapDataIntoTableValue = (
  defaultValues: ElectricalMeterReadingTableValues,
  report: ReportDetails,
  shift: Shift,
  startLineIndex: number,
): ElectricalMeterReadingTableValues => {
  try {
    if (!report?.rowsMaps || !report.type || !shift) {
      return defaultValues;
    }

    const rowsMap = report.rowsMaps[shift === Shift.MORNING ? 0 : 1];
    const reportKey = report.type.name as ReportKey;

    const rows = defaultValues.rows;
    let total = 0;
    defaultValues.rows.forEach((row, rowIndex) => {
      row.equipments.forEach((_, lineIndex) => {
        const oldValueMapKey = `${reportKey}_${lineIndex + startLineIndex}_0`;
        const newValue1MapKey = `${reportKey}_${lineIndex + startLineIndex}_1`;
        const newValue2MapKey = `${reportKey}_${lineIndex + startLineIndex}_3`;
        const newValue3MapKey = `${reportKey}_${lineIndex + startLineIndex}_5`;
        const newValue4MapKey = `${reportKey}_${lineIndex + startLineIndex}_7`;
        const oldValue = rowsMap?.[oldValueMapKey as keyof RowsMap] ?? 0;
        const newValue1 = rowsMap?.[newValue1MapKey as keyof RowsMap] ?? 0;
        const newValue2 = rowsMap?.[newValue2MapKey as keyof RowsMap] ?? 0;
        const newValue3 = rowsMap?.[newValue3MapKey as keyof RowsMap] ?? 0;
        const newValue4 = rowsMap?.[newValue4MapKey as keyof RowsMap] ?? 0;

        rows[rowIndex].oldElectricValues[lineIndex] = formatNumber(oldValue, 6);
        rows[rowIndex].checkpointTotals[lineIndex] = formatNumber(
          newValue4 - oldValue,
          6,
        );
        rows[rowIndex].checkpoints[lineIndex] = {
          checkpoint1: {
            newValue: formatNumber(newValue1, 6),
            total: formatNumber(newValue1 - oldValue, 6),
          },
          checkpoint2: {
            newValue: formatNumber(newValue2, 6),
            total: formatNumber(newValue2 - newValue1, 6),
          },
          checkpoint3: {
            newValue: formatNumber(newValue3, 6),
            total: formatNumber(newValue3 - newValue2, 6),
          },
          checkpoint4: {
            newValue: formatNumber(newValue4, 6),
            total: formatNumber(newValue4 - newValue3, 6),
          },
        };
        total += newValue4 - oldValue;
      });
    });
    return { ...defaultValues, rows, total: total * 1000000 };
  } catch (error) {
    return defaultValues;
  }
};
