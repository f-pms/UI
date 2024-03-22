import _ from 'lodash';

export function formatNumber(number: number, decimalPlaces: number) {
  if (_.isNaN(number) || !_.isNumber(number)) {
    return '';
  }

  // 1. Convert to a string and ensure it's a number
  const numberString = _.toString(_.round(number, decimalPlaces));

  // 2. Split into integer and decimal parts (using toFixed for consistency)
  const parts = numberString.split('.');

  // 3. Format the integer part using a regular expression (similar to previous example)
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // 4. Join and return the formatted number
  return parts.join('.');
}
