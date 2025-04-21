import { CurrencyPipe, DatePipe } from '@angular/common';
import { ColumnDef } from '../../components/ui/data-table/types';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../data/products';

export const createColumns = (
  productsService: ProductsService
): ColumnDef<Product>[] => [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (row: Product) => {
      const { name } = row;
      return name;
    },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: (row: Product) => {
      return row.description;
    },
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: (row: Product) => {
      return (
        new CurrencyPipe('en-US').transform(
          row.price,
          'KWD',
          'symbol',
          '1.3-3'
        ) ?? '0.000 KWD'
      );
    },
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: (row: Product) => {
      return row.category;
    },
  },
  {
    accessorKey: 'stock',
    header: 'Stock',
    cell: (row: Product) => {
      return row.stock;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (row: Product) => {
      const status = row.status.charAt(0).toUpperCase() + row.status.slice(1);
      return status;
    },
  },
  {
    accessorKey: 'rating',
    header: 'Rating',
    cell: (row: Product) => {
      return row.rating;
    },
  },
  {
    accessorKey: 'imageUrl',
    header: 'Image',
    cell: (row: Product) => {
      return row.imageUrl;
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: (row: Product) => {
      return (
        new DatePipe('en-US').transform(row.createdAt, 'dd/MM/yyyy') ?? '-'
      );
    },
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated At',
    cell: (row: Product) => {
      return (
        new DatePipe('en-US').transform(row.updatedAt, 'dd/MM/yyyy') ?? '-'
      );
    },
  },
  {
    accessorKey: 'tags',
    header: 'Tags',
    cell: (row: Product) => {
      return row.tags.join(', ');
    },
  },
];
