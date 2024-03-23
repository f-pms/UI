const ChartColors = {
  color1: 'rgb(255, 99, 132)', // Pink (existing)
  color2: 'rgb(54, 162, 235)', // Light blue (existing)
  color3: 'rgb(255, 206, 86)', // Yellow (existing)
  color4: 'rgb(75, 192, 192)', // Teal (existing)
  color5: 'rgb(255, 159, 64)', // Orange (existing)
  color6: 'rgb(230, 28, 33)', // Crimson Red (contrasting to teal)
  color7: 'rgb(0, 128, 128)', // Dark Teal (darker shade of existing teal)
  color8: 'rgb(148, 0, 211)', // Violet (contrasting to yellow)
  color9: 'rgb(255, 127, 80)', // Coral (contrasting to blue)
  color10: 'rgb(0, 174, 239)', // Turquoise (contrasting to orange)
  color11: 'rgb(128, 128, 128)', // Gray (neutral)
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
