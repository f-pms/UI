import { createContext, useMemo, useState } from 'react';
import { MRT_PaginationState } from 'material-react-table';

export type HistoryPaginationType = {
  pagination: MRT_PaginationState;
  setPagination: (old: MRT_PaginationState) => void;
};

export const HistoryPaginationContext = createContext<HistoryPaginationType>({
  pagination: {
    pageIndex: 0,
    pageSize: 10,
  },
  setPagination: () => {},
});

interface IHistoryPaginationProviderProps {
  children: React.ReactNode;
}

export function HistoryPaginationProvider({
  children,
}: IHistoryPaginationProviderProps) {
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const value = useMemo(
    () => ({
      pagination,
      setPagination,
    }),
    [pagination, setPagination],
  );
  return (
    <HistoryPaginationContext.Provider value={value}>
      {children}
    </HistoryPaginationContext.Provider>
  );
}
