import { useState } from 'react';

import { FigureInfoType } from '~/services/blueprint/queries/useQueryBlueprintById';
import { FigureValuesType } from '~/stores/useMonitoringStore';

import AddressUpdateForm from '~/pages/ProductionManagement/partials/AddressUpdateForm';
import { Figure } from '~/pages/ProductionManagement/partials/Figures/Figure';

export interface FiguresProps {
  figuresCoordinateList: FigureInfoType[];
  figureValues: FigureValuesType;
}

export interface OpenAddressUpdateFormProps extends FigureInfoType {}

export function Figures({ figuresCoordinateList, figureValues }: FiguresProps) {
  const [updateFigureInfoFormOpen, setUpdateFigureInfoFormOpen] =
    useState<boolean>(false);
  const [selectedFigureInfo, setSelectedFigureInfo] =
    useState<FigureInfoType>();

  const openAddressUpdateForm = (props: OpenAddressUpdateFormProps) => {
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
            openAddressUpdateForm={openAddressUpdateForm}
          />
        );
      })}
      <AddressUpdateForm
        figureInfo={selectedFigureInfo}
        handleClose={() => setUpdateFigureInfoFormOpen(false)}
        open={updateFigureInfoFormOpen}
      />
    </g>
  );
}
