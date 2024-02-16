import { Row } from '@tanstack/react-table';
import { TableDataProps } from '@/data/home/table-data';

export type ColumnsDataProps = {
  key: string;
  name: string;
  sort: boolean;
  cell: (e: Row<TableDataProps>, key: string) => JSX.Element;
};

const ColumnsData: ColumnsDataProps[] = [
  {
    key: 'data1',
    name: 'Data 1',
    sort: true,
    cell: (e: Row<TableDataProps>, key: string) => (
      <div className="flex h-9 items-center">
        <div className="capitalize">{e.getValue(key)}</div>
      </div>
    ),
  },
  {
    key: 'data2',
    name: 'Data 2',
    sort: true,
    cell: (e: Row<TableDataProps>, key: string) => (
      <div className="flex h-9 items-center">
        <div className="capitalize">{e.getValue(key)}</div>
      </div>
    ),
  },
  {
    key: 'data3',
    name: 'Data 3',
    sort: true,
    cell: (e: Row<TableDataProps>, key: string) => (
      <div className="flex h-9 items-center">
        <div className="capitalize">{e.getValue(key)}</div>
      </div>
    ),
  },
  {
    key: 'data4',
    name: 'Data 4',
    sort: true,
    cell: (e: Row<TableDataProps>, key: string) => (
      <div className="flex h-9 items-center">
        <div className="capitalize">{e.getValue(key)}</div>
      </div>
    ),
  },
  {
    key: 'data5',
    name: 'Data 5',
    sort: true,
    cell: (e: Row<TableDataProps>, key: string) => (
      <div className="flex h-9 items-center">
        <div className="capitalize">{e.getValue(key)}</div>
      </div>
    ),
  },
];

export default ColumnsData;
