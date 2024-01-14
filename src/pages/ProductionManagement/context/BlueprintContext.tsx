import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { IBlueprint } from '~/services/blueprint/queries/useQueryBlueprintById';

export type BlueprintsContextType = {
  blueprints: IBlueprint[];
  renderedBlueprintId: number;
  updateRenderedBlueprintId: (id: number) => void;
  updateBlueprints: (blueprints: IBlueprint[]) => void;
};

export const BlueprintsContext = createContext<BlueprintsContextType>({
  blueprints: [],
  renderedBlueprintId: 1,
  updateRenderedBlueprintId: () => {},
  updateBlueprints: () => {},
});

export interface IBlueprintsProviderProps {
  children: ReactNode;
}

export default function BlueprintsProvider({
  children,
}: IBlueprintsProviderProps) {
  const [blueprints, setBlueprints] = useState<IBlueprint[]>([]);
  const [renderedBlueprintId, setRenderedBlueprintId] = useState<number>(1);

  const updateRenderedBlueprintId = (id: number) => setRenderedBlueprintId(id);

  const updateBlueprints = (blueprints: IBlueprint[]) =>
    setBlueprints(blueprints);

  const value = useMemo(
    () => ({
      blueprints,
      renderedBlueprintId,
      updateRenderedBlueprintId,
      updateBlueprints,
    }),
    [blueprints, renderedBlueprintId],
  );

  return (
    <BlueprintsContext.Provider value={value}>
      {children}
    </BlueprintsContext.Provider>
  );
}

export const useCurrentBlueprintContext = (): IBlueprint => {
  const { blueprints, renderedBlueprintId } = useContext(BlueprintsContext);
  const blueprint = blueprints.find(
    (blueprint) => blueprint.id === renderedBlueprintId,
  );
  if (blueprint === undefined)
    throw new Error('There is no matched blueprint for this tab!');
  return blueprint;
};
