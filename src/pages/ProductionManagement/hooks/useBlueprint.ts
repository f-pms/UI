import { useContext, useEffect, useMemo, useState } from 'react';

import { useQueryBlueprintById } from '~/services/blueprint/queries/useQueryBlueprintById';

import { FiguresCoordinateContext } from '~/pages/ProductionManagement/context/FiguresCoordinateContext';
import {
  DIAGRAMS,
  getTabItemByValue,
} from '~/pages/ProductionManagement/helpers/diagrams';

export default () => {
  const [tabValue, setTabValue] = useState(DIAGRAMS[0].value);
  const tabInfo = useMemo(() => getTabItemByValue(tabValue), [tabValue]);
  const { figuresCoordinate, updateContextByBlueprint } = useContext(
    FiguresCoordinateContext,
  );

  const {
    data,
    isLoading: isFetchingBlueprint,
    refetch: refetchBlueprint,
  } = useQueryBlueprintById(tabInfo.blueprint);

  useEffect(() => {
    refetchBlueprint();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabValue]);

  useEffect(() => {
    if (data != undefined) {
      updateContextByBlueprint(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    tabValue,
    setTabValue,
    tabInfo,
    figuresCoordinate,
    isFetchingBlueprint,
  };
};
