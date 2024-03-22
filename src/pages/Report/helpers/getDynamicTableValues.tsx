export const getDynamicTableValues = (lineNumber: number) => {
  const oldElectricValues = [];
  const checkpoints = [];
  const checkpointTotals = [];
  for (let i = 0; i < lineNumber; i++) {
    oldElectricValues.push(0);
    checkpoints.push({
      checkpoint1: {
        newValue: 0,
        total: 0,
      },
      checkpoint2: {
        newValue: 0,
        total: 0,
      },
      checkpoint3: {
        newValue: 0,
        total: 0,
      },
      checkpoint4: {
        newValue: 0,
        total: 0,
      },
    });
    checkpointTotals.push(0);
  }
  return { oldElectricValues, checkpoints, checkpointTotals };
};
