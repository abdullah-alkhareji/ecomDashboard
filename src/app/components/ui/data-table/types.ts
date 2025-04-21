import { TemplateRef } from '@angular/core';

export type ColumnDef<T> = {
  header?: string;
  cell?: (row: T) => string | number | HTMLElement | TemplateRef<any>;
} & (
  | { accessorKey: keyof T; id?: never }
  | { id: string; accessorKey?: never }
);

export interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (row: T) => void;
  className?: string;
}

export interface TablePaginationState {
  pageIndex: number;
  pageSize: number;
}

export interface TableSortingState {
  key: string;
  direction: 'asc' | 'desc';
}
