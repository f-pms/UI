import _ from 'lodash';

export function formatNumber(number: number, decimalPlaces: number) {
  if (_.isNaN(number) || !_.isNumber(number)) {
    return '';
  }

  // 1. Convert to a string and ensure it's a number
  const numberString = _.toString(_.round(number, decimalPlaces));

  // 2. Split into integer and decimal parts (using toFixed for consistency)
  const parts = numberString.split('.');

  parts[0] = parts[0]
    .split('')
    .reverse()
    .reduce((prev, curr, i) => {
      return (i % 3 === 2 && i !== 0 ? ',' : '') + curr + prev;
    }, '');

  // 4. Join and return the formatted number
  return parts.join('.');
}
