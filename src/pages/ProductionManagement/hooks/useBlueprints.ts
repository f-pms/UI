import { useContext, useEffect, useMemo, useState } from 'react';

import { useQueryBlueprints } from '~/services/blueprint/queries/useQueryBlueprints';

import { BlueprintsContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import {
  DIAGRAMS,
  getTabItemByValue,
} from '~/pages/ProductionManagement/helpers/diagrams';

export default () => {
  const [tabValue, setTabValue] = useState(DIAGRAMS[0].value);
  const tabInfo = useMemo(() => getTabItemByValue(tabValue), [tabValue]);
  const { updateBlueprints, updateRenderedBlueprintId } =
    useContext(BlueprintsContext);
  const [isBlueprintReady, setIsBlueprintReady] = useState<boolean>(false);

  const { data: fetchedBlueprints, isError: isBlueprintError } =
    useQueryBlueprints();

  useEffect(() => {
    if (fetchedBlueprints) {
      updateBlueprints(fetchedBlueprints);
      setIsBlueprintReady(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedBlueprints]);

  useEffect(() => {
    updateRenderedBlueprintId(tabInfo.blueprintId);
  }, [tabInfo, updateRenderedBlueprintId]);

  return {
    tabValue,
    setTabValue,
    tabInfo,
    isBlueprintReady,
    isBlueprintError,
  };
};
