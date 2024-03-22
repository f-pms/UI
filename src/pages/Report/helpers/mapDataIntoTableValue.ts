import { ElectricalMeterReadingTableValues, ReportKey, RowsMap } from '~/types';

export const mapDataIntoTableValue = (
  defaultValues: ElectricalMeterReadingTableValues,
  rowsMap: RowsMap,
  reportKey: ReportKey | undefined,
  startLineIndex: number,
) => {
  if (!rowsMap) {
    return defaultValues;
  }

  const rows = defaultValues.rows;
  let total = 0;
  defaultValues.rows.forEach((row, rowIndex) => {
    row.equipments.forEach((_, lineIndex) => {
      const oldValueMapKey = `${reportKey}_${lineIndex + startLineIndex}.0`;
      const newValue1MapKey = `${reportKey}_${lineIndex + startLineIndex}.1`;
      const newValue2MapKey = `${reportKey}_${lineIndex + startLineIndex}.2`;
      const newValue3MapKey = `${reportKey}_${lineIndex + startLineIndex}.3`;
      const newValue4MapKey = `${reportKey}_${lineIndex + startLineIndex}.4`;
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
