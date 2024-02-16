/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef, Row } from '@tanstack/react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../ui/button';

type ColumnsDataProps = {
  key: string;
  name: string;
  sort: boolean;
  cell: (e: Row<any>, key: string) => JSX.Element;
};

export default function TableColumns(ColumnsData: ColumnsDataProps[]) {
  const columns: ColumnDef<any>[] = ColumnsData.map(
    (items: ColumnsDataProps) => ({
      accessorKey: items.key,
      header: ({ column }) => (items.sort ? (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="p-0"
        >
          {items.name}
          <FontAwesomeIcon icon={faSort} className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        items.name
      )),
      cell: ({ row }) => items.cell(row, items.key),
    }),
  );
  return columns;
}
