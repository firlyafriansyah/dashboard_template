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
import * as React from 'react';
import TableCustom from '@/components/custom/table';
import ColumnsData from '@/data/home/columns-data';
import MainLayout from '@/layout/main-layout';
import TableColumns from '@/components/custom/table-columns';
import TableData from '@/data/home/table-data';

export default function Home() {
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
        globalFilter={globalFilter}
        columns={TableColumns(ColumnsData)}
        setGlobalFilter={(e: string) => setGlobalFilter(e)}
      />
    </MainLayout>
  );
}
