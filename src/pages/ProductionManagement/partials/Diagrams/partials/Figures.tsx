import { useState } from 'react';

import { FigureInfoType } from '~/services/blueprint/queries/useQueryBlueprintById';
import { FigureValuesType } from '~/stores/useMonitoringStore';

import { Figure } from '~/pages/ProductionManagement/partials/Diagrams/partials/Figure';
import UpdateFigureInfoForm from '~/pages/ProductionManagement/partials/Diagrams/partials/UpdateFigureInfoForm';

export interface FiguresProps {
  figuresCoordinateList: FigureInfoType[];
  figureValues: FigureValuesType;
}

export function Figures({ figuresCoordinateList, figureValues }: FiguresProps) {
  const [updateFigureInfoFormOpen, setupdateFigureInfoFormOpen] =
    useState<boolean>(false);

  return (
    <g>
      {figuresCoordinateList.map(({ address, db, offset, dataType, x, y }) => (
        <Figure
          key={address + x + y}
          dataType={dataType}
          db={db}
          horizontalCoordinate={x}
          offset={offset}
          value={figureValues[address]}
          verticalCoordinate={y}
        />
      ))}
      <UpdateFigureInfoForm
        handleClose={() => setupdateFigureInfoFormOpen(false)}
        open={updateFigureInfoFormOpen}
      />
    </g>
  );
}
