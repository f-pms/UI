import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import {
  DisplayCoordinate,
  IBlueprint,
} from '~/services/blueprint/queries/useQueryBlueprintById';

export type FigureCoordinateType = {
  address: string;
  displayCoordinate: DisplayCoordinate;
};

export type FiguresCoordinateContextType = {
  figuresCoordinateList: FigureCoordinateType[];
  updateContextByBlueprint: (blueprint: IBlueprint) => void;
};

export const FiguresCoordinateContext =
  createContext<FiguresCoordinateContextType>({
    figuresCoordinateList: [],
    updateContextByBlueprint: () => {},
  });

export interface IFiguresCoordinateProviderProps {
  children: ReactNode;
}

export default function FiguresCoordinateProvider({
  children,
}: IFiguresCoordinateProviderProps) {
  const [figuresCoordinateList, setFiguresCoordinateList] = useState<
    FigureCoordinateType[]
  >([]);

  const onFiguresCoordinateChange = (
    figuresCoordinate: FigureCoordinateType[],
  ) => {
    setFiguresCoordinateList(figuresCoordinate);
  };

  const updateContextByBlueprint = (blueprint: IBlueprint) => {
    const figuresCoordinateList = [];
    const groups = blueprint.sensorConfigurations;

    for (const group of groups) {
      for (const figure of group.figures) {
        figuresCoordinateList.push({
          address: figure.address,
          displayCoordinate: figure.displayCoordinate,
        });
      }
    }

    setFiguresCoordinateList(figuresCoordinateList);
  };

  const value = useMemo(
    () => ({
      figuresCoordinateList,
      onFiguresCoordinateChange,
      updateContextByBlueprint,
    }),
    [figuresCoordinateList],
  );

  return (
    <FiguresCoordinateContext.Provider value={value}>
      {children}
    </FiguresCoordinateContext.Provider>
  );
}

export const useFiguresCoordinateContext = () => {
  const { figuresCoordinateList } = useContext(FiguresCoordinateContext);
  return figuresCoordinateList;
};
