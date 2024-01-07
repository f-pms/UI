import { createContext, ReactNode, useMemo, useState } from 'react';

import {
  DisplayCoordinate,
  IBlueprint,
} from '~/services/blueprint/queries/useQueryBlueprintById';

export type FiguresCoordinateTypeByGroup = {
  [key: string]: FiguresCoordinateType;
};

export type FiguresCoordinateType = {
  [key: string]: DisplayCoordinate;
};

export type FiguresCoordinateContextType = {
  figuresCoordinate: FiguresCoordinateTypeByGroup;
  onFiguresCoordinateChange: (
    figuresCoordinate: FiguresCoordinateTypeByGroup,
  ) => void;
  updateContextByBlueprint: (blueprint: IBlueprint) => void;
};

export const FiguresCoordinateContext =
  createContext<FiguresCoordinateContextType>({
    figuresCoordinate: {},
    onFiguresCoordinateChange: () => {},
    updateContextByBlueprint: () => {},
  });

export interface IFiguresCoordinateProviderProps {
  children: ReactNode;
}

export default function FiguresCoordinateProvider({
  children,
}: IFiguresCoordinateProviderProps) {
  const [figuresCoordinate, setFiguresCoordinate] =
    useState<FiguresCoordinateTypeByGroup>({});

  const onFiguresCoordinateChange = (
    figuresCoordinate: FiguresCoordinateTypeByGroup,
  ) => {
    setFiguresCoordinate(figuresCoordinate);
  };

  const updateContextByBlueprint = (blueprint: IBlueprint) => {
    const figuresCoordinateByGroup: FiguresCoordinateTypeByGroup = {};
    const groups = blueprint.sensorConfigurations;

    for (const group of groups) {
      const figuresCoordinate: { [key: string]: DisplayCoordinate } = {};
      for (const figure of group.figures) {
        figuresCoordinate[figure.id] = figure.displayCoordinate;
      }
      figuresCoordinateByGroup[group.groupId] = figuresCoordinate;
    }

    setFiguresCoordinate(figuresCoordinateByGroup);
  };

  const value = useMemo(
    () => ({
      figuresCoordinate,
      onFiguresCoordinateChange,
      updateContextByBlueprint,
    }),
    [figuresCoordinate],
  );

  return (
    <FiguresCoordinateContext.Provider value={value}>
      {children}
    </FiguresCoordinateContext.Provider>
  );
}
