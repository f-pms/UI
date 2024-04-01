import _ from 'lodash';

export function formatNumber(number: number, decimalPlaces: number) {
  if (_.isNaN(number) || !_.isNumber(number) || number < 0) {
    return '0';
  }

  // 1. Convert to a string and ensure it's a number
  const numberString = _.toString(_.round(number, decimalPlaces));

  // 2. Split into integer and decimal parts (using toFixed for consistency)
  const parts = numberString.split('.');

  const length = parts[0].length;
  parts[0] = parts[0]
    .split('')
    .reverse()
    .reduce((prev, curr, i) => {
      return (
        (i % 3 === 2 && i !== 0 && i !== length - 1 ? ',' : '') + curr + prev
      );
    }, '');

  // 4. Join and return the formatted number
  return parts.join('.');
}
