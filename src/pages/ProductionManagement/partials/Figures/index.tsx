import { useState } from 'react';

import { FigureInfoType } from '~/services/blueprint/queries/useQueryBlueprintById';
import { FigureValuesType } from '~/stores/useMonitoringStore';

import { Figure } from '~/pages/ProductionManagement/partials/Figures/Figure';
import UpdateFigureInfoDialog from '~/pages/ProductionManagement/partials/Figures/UpdateFigureInfoDialog';

export interface FiguresProps {
  figuresCoordinateList: FigureInfoType[];
  figureValues: FigureValuesType;
}

export interface OpenUpdateFigureInfoDialogProps extends FigureInfoType {}

export function Figures({ figuresCoordinateList, figureValues }: FiguresProps) {
  const [updateFigureInfoFormOpen, setUpdateFigureInfoFormOpen] =
    useState<boolean>(false);
  const [selectedFigureInfo, setSelectedFigureInfo] =
    useState<FigureInfoType>();

  const openUpdateFigureInfoDialog = (
    props: OpenUpdateFigureInfoDialogProps,
  ) => {
    setSelectedFigureInfo(props);
    setUpdateFigureInfoFormOpen(true);
  };

  return (
    <g>
      {figuresCoordinateList.map((figuresCoordinate) => {
        const { id } = figuresCoordinate;
        return (
          <Figure
            key={id}
            figureInfo={figuresCoordinate}
            figureValue={figureValues[id]}
            openUpdateFigureInfoDialog={openUpdateFigureInfoDialog}
          />
        );
      })}
      <UpdateFigureInfoDialog
        figureInfo={selectedFigureInfo}
        handleClose={() => setUpdateFigureInfoFormOpen(false)}
        open={updateFigureInfoFormOpen}
      />
    </g>
  );
}
