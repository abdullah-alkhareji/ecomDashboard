import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColumnDef, TablePaginationState, TableSortingState } from './types';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent<T> {
  @Input() data!: T[] | null;
  @Input() columns!: ColumnDef<T>[];
  @Input() className?: string;
  @Input() pageSize: number = 10;
  @Input() showPagination: boolean = true;
  @Input() showSorting: boolean = true;
  @Input() selectable: boolean = false;
  @Input() onRowClick?: (row: T) => void;
  @Input() onEdit?: (row: T) => void;
  @Input() onDelete?: (row: T) => void;

  @Output() rowClick = new EventEmitter<T>();
  @Output() pageChange = new EventEmitter<TablePaginationState>();
  @Output() sortChange = new EventEmitter<TableSortingState>();
  @Output() actionClick = new EventEmitter<{ action: string; row: T }>();

  currentPage: number = 0;
  sorting: TableSortingState = { key: '', direction: 'asc' };
  selectedRows: Set<number> = new Set();

  get totalPages(): number {
    return Math.ceil(this.data?.length || 0 / this.pageSize);
  }

  get paginatedData(): T[] {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.data?.slice(start, end) || [];
  }

  get sortedData(): T[] {
    if (!this.sorting.key) return this.paginatedData;

    return [...this.paginatedData].sort((a, b) => {
      const aValue = a[this.sorting.key as keyof T];
      const bValue = b[this.sorting.key as keyof T];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return this.sorting.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return this.sorting.direction === 'asc'
        ? (aValue as any) - (bValue as any)
        : (bValue as any) - (aValue as any);
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.pageChange.emit({
      pageIndex: page,
      pageSize: this.pageSize,
    });
  }

  onSort(column: ColumnDef<T>): void {
    if (!this.showSorting || !column.accessorKey) return;

    if (this.sorting.key === column.accessorKey.toString()) {
      this.sorting.direction =
        this.sorting.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.sorting.key = column.accessorKey.toString();
      this.sorting.direction = 'asc';
    }

    this.sortChange.emit(this.sorting);
  }

  onRowClickHandler(row: T): void {
    this.rowClick.emit(row);
  }

  toggleRowSelection(index: number): void {
    if (this.selectedRows.has(index)) {
      this.selectedRows.delete(index);
    } else {
      this.selectedRows.add(index);
    }
  }

  isRowSelected(index: number): boolean {
    return this.selectedRows.has(index);
  }
}
