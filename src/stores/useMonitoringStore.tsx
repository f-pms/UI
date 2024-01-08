import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export type FigureValuesType = {
  [key: string]: number;
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

        for (const figureId in figureValues) {
          processedFigureValues[figureId] =
            Math.floor(figureValues[figureId] * 100) / 100;
        }
        set({
          figureValues: processedFigureValues,
        });
      },
    }),
  ),
);
