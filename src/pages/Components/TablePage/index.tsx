import { useEffect, useMemo } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef, //if using TypeScript (optional, but recommended)
  useMaterialReactTable,
} from 'material-react-table';

import { useLoadingStore } from '~/stores';

//If using TypeScript, define the shape of your data (optional, but recommended)
interface Person {
  name: string;
  age: number;
}

export interface ITablePageProps {}

//mock data - strongly typed if you are using TypeScript (optional, but recommended)
const persons: Person[] = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Sara',
    age: 25,
  },
];

export function TablePage() {
  //column definitions - strongly typed if you are using TypeScript (optional, but recommended)
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Name',
        muiTableHeadCellProps: { style: { color: 'green' } }, //custom props
        enableHiding: false, //disable a feature for this column
      },
      {
        accessorFn: (originalRow) => originalRow.age, //alternate way
        id: 'age', //id required if you use accessorFn instead of accessorKey
        header: 'Age',
        Header: <i style={{ color: 'red' }}>Age</i>, //optional custom markup
      },
    ],
    [],
  );

  //pass table options to useMaterialReactTable
  const table = useMaterialReactTable({
    columns,
    data: persons, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowSelection: true, //enable some features
    enableColumnOrdering: false, //enable a feature for all columns
    enableGlobalFilter: false, //turn off a feature
  });

  const setLoading = useLoadingStore((state) => state.setLoading);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  //note: you can also pass table options as props directly to <MaterialReactTable /> instead of using useMaterialReactTable
  //but the useMaterialReactTable hook will be the most recommended way to define table options
  return <MaterialReactTable table={table} />;
}
