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
  const { blueprints, updateBlueprints, updateRenderedBlueprintId } =
    useContext(BlueprintsContext);
  const [isBlueprintReady, setIsBlueprintReady] = useState<boolean>(false);

  const { data: blueprintList } = useQueryBlueprints();

  useEffect(() => {
    if (blueprintList != undefined) {
      updateBlueprints(blueprintList);
      setIsBlueprintReady(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blueprintList]);

  useEffect(() => {
    updateRenderedBlueprintId(tabInfo.blueprintId);
  }, [tabInfo, updateRenderedBlueprintId]);

  return {
    tabValue,
    setTabValue,
    tabInfo,
    blueprints,
    isBlueprintReady,
  };
};
