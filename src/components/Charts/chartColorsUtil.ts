const ChartColors = {
  color1: 'rgba(255, 99, 132, 1)',
  color2: 'rgba(54, 162, 235, 1)',
  color3: 'rgba(255, 206, 86, 1)',
  color4: 'rgba(75, 192, 192, 1)',
  color5: 'rgba(255,159,64, 1)',
};

export const generateColors = (numberOfColors: number) => {
  const result = [];
  for (let i = 1; i <= numberOfColors; i++) {
    result.push(ChartColors[`color${i}` as keyof typeof ChartColors]);
  }

  return result;
};

export const getColorNumber = (number: number) => {
  return ChartColors[`color${number}` as keyof typeof ChartColors];
};
