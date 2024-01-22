import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { IBlueprint } from '~/services/blueprint/queries/useQueryBlueprintById';

export type BlueprintsContextType = {
  blueprints: IBlueprint[];
  updateBlueprints: (blueprints: IBlueprint[]) => void;
  renderedBlueprintId: number;
  updateRenderedBlueprintId: (id: number) => void;
  isEditMode: boolean;
  updateIsEditMode: (enabled: boolean) => void;
};

export const BlueprintsContext = createContext<BlueprintsContextType>({
  blueprints: [],
  updateBlueprints: () => {},
  renderedBlueprintId: 1,
  updateRenderedBlueprintId: () => {},
  isEditMode: false,
  updateIsEditMode: () => {},
});

export interface IBlueprintsProviderProps {
  children: ReactNode;
}

export default function BlueprintsProvider({
  children,
}: IBlueprintsProviderProps) {
  const [blueprints, setBlueprints] = useState<IBlueprint[]>([]);
  const [renderedBlueprintId, setRenderedBlueprintId] = useState<number>(1);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const updateRenderedBlueprintId = (id: number) => setRenderedBlueprintId(id);

  const updateBlueprints = (blueprints: IBlueprint[]) =>
    setBlueprints(blueprints);

  const updateIsEditMode = (enabled: boolean) => setIsEditMode(enabled);

  const value = useMemo(
    () => ({
      blueprints,
      updateBlueprints,
      renderedBlueprintId,
      updateRenderedBlueprintId,
      isEditMode,
      updateIsEditMode,
    }),
    [blueprints, isEditMode, renderedBlueprintId],
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
  if (!blueprint)
    throw new Error('There is no matched blueprint for this tab!');
  return blueprint;
};
