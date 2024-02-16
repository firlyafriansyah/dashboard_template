import * as React from 'react';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import TableCustom from '@/components/custom/table';
import TableColumns from '@/components/custom/table-columns';
import MainLayout from '@/layout/main-layout';
import TableData from '@/data/transaction/table-data';
import ColumnsData from '@/data/transaction/columns-data';

export default function Transaction() {
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

  const table = useReactTable({
    data: TableData,
    onSortingChange: setSorting,
    columns: TableColumns(ColumnsData),
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      globalFilter,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <MainLayout>
      <TableCustom
        table={table}
        columns={TableColumns(ColumnsData)}
        globalFilter={globalFilter}
        setGlobalFilter={(e: string) => setGlobalFilter(e)}
      />
    </MainLayout>
  );
}
