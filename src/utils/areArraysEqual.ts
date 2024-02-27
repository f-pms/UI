export function areArraysEqual(
  firstList: string[],
  secondList: string[],
): boolean {
  if (firstList.length !== secondList.length) return false;

  const sortedFirstList = [...firstList].sort((a, b) => a.localeCompare(b));
  const sortedSecondList = [...secondList].sort((a, b) => a.localeCompare(b));

  return sortedFirstList.every(
    (value, index) => value === sortedSecondList[index],
  );
}
