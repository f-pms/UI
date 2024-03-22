import {
  ElectricalMeterReadingTableValues,
  ReportDetails,
  ReportKey,
  RowsMap,
  Shift,
} from '~/types';

export const mapDataIntoTableValue = (
  defaultValues: ElectricalMeterReadingTableValues,
  report: ReportDetails,
  shift: Shift,
  startLineIndex: number,
): ElectricalMeterReadingTableValues => {
  const rowsMap = report.rowsMaps[shift === Shift.MORNING ? 0 : 1];
  const reportKey = report.type.name as ReportKey;

  if (!rowsMap || !reportKey || !shift) {
    return defaultValues;
  }
  const rows = defaultValues.rows;
  let total = 0;
  defaultValues.rows.forEach((row, rowIndex) => {
    row.equipments.forEach((_, lineIndex) => {
      const oldValueMapKey = `${reportKey}_${lineIndex + startLineIndex}_0`;
      const newValue1MapKey = `${reportKey}_${lineIndex + startLineIndex}_1`;
      const newValue2MapKey = `${reportKey}_${lineIndex + startLineIndex}_2`;
      const newValue3MapKey = `${reportKey}_${lineIndex + startLineIndex}_3`;
      const newValue4MapKey = `${reportKey}_${lineIndex + startLineIndex}_4`;
      const oldValue = rowsMap[oldValueMapKey as keyof RowsMap];
      const newValue1 = rowsMap[newValue1MapKey as keyof RowsMap];
      const newValue2 = rowsMap[newValue2MapKey as keyof RowsMap];
      const newValue3 = rowsMap[newValue3MapKey as keyof RowsMap];
      const newValue4 = rowsMap[newValue4MapKey as keyof RowsMap];
      rows[rowIndex].oldElectricValues[lineIndex] = oldValue;
      rows[rowIndex].checkpointTotals[lineIndex] = newValue4 - oldValue;
      rows[rowIndex].checkpoints[lineIndex] = {
        checkpoint1: {
          newValue: newValue1,
          total: newValue1 - oldValue,
        },
        checkpoint2: {
          newValue: newValue2,
          total: newValue2 - newValue1,
        },
        checkpoint3: {
          newValue: newValue3,
          total: newValue3 - newValue2,
        },
        checkpoint4: {
          newValue: newValue4,
          total: newValue4 - newValue3,
        },
      };
      total += newValue4 - oldValue;
    });
  });
  return { ...defaultValues, rows, total };
};
