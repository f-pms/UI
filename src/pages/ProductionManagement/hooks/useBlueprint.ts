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
  const { figuresCoordinateList, updateContextByBlueprint } = useContext(
    FiguresCoordinateContext,
  );
  const [isBlueprintReady, setIsBlueprintReady] = useState<boolean>(false);

  const { data, refetch: refetchBlueprint } = useQueryBlueprintById(
    tabInfo.blueprint,
  );

  useEffect(() => {
    setIsBlueprintReady(false);
    refetchBlueprint();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabValue]);

  useEffect(() => {
    if (data != undefined) {
      updateContextByBlueprint(data);
      setIsBlueprintReady(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    tabValue,
    setTabValue,
    tabInfo,
    figuresCoordinateList,
    isBlueprintReady,
  };
};
