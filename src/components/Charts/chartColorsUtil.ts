const ChartColors = {
  color1: 'rgb(255, 99, 132)',
  color2: 'rgb(54, 162, 235)',
  color3: 'rgb(255, 206, 86)',
  color4: 'rgb(75, 192, 192)',
  color5: 'rgb(255, 159, 64)',
  color6: 'rgb(230, 28, 33)',
  color7: 'rgb(0, 128, 128)',
  color8: 'rgb(148, 0, 211)',
  color9: 'rgb(255, 127, 80)',
  color10: 'rgb(0, 174, 239)',
  color11: 'rgb(128, 128, 128)',
  color12: 'rgb(178, 34, 34)',
  color13: 'rgb(0, 255, 127)',
  color14: 'rgb(255, 102, 0)',
  color15: 'rgb(128, 0, 128)',
  color16: 'rgb(255, 255, 0)',
};

export const generateColors = (numberOfColors: number) => {
  const result = [];
  for (let i = 1; i <= numberOfColors; i++) {
    result.push(getColorNumber(i));
  }

  return result;
};

export const getColorNumber = (number: number) => {
  const selectedIndex = number % (Object.keys(ChartColors).length + 1);

  return ChartColors[`color${selectedIndex}` as keyof typeof ChartColors];
};
