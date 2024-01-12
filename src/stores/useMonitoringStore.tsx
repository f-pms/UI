import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export type FigureValuesType = {
  [key: string]: string;
};

type State = {
  figureValues: FigureValuesType;
  updateFigures: (figureValues: FigureValuesType) => void;
};

export const useMonitoringStore = create<State>(
  combine(
    {
      figureValues: {},
    },
    (set) => ({
      updateFigures: (figureValues: FigureValuesType) => {
        const processedFigureValues: FigureValuesType = {};
        let temp: string | number;

        for (const address in figureValues) {
          temp = Number(figureValues[address]);
          if (Number.isNaN(temp)) {
            console.error(figureValues[address] + ' is not a number!');
            processedFigureValues[address] = 'x';
          } else {
            processedFigureValues[address] = (
              Math.floor(temp * 100) / 100
            ).toString();
          }
        }
        set({
          figureValues: processedFigureValues,
        });
      },
    }),
  ),
);
