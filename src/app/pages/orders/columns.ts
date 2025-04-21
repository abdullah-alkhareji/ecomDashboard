import { CurrencyPipe } from '@angular/common';
import { Order } from '../../../data/orders';
import { ColumnDef } from '../../components/ui/data-table/types';
import { OrdersService } from '../../services/orders.service';


export const createColumns = (
  ordersService: OrdersService
): ColumnDef<Order>[] => [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'userId',
    header: 'User',
    cell: (row: Order) => {
      const { id } = row;
      const user = ordersService.getOrderUser(id);
      return user?.name ?? '-';
    },
  },
  {
    accessorKey: 'products',
    header: 'Products',
    cell: (row: Order) => {
      return row.products
        .map((p) => {
          const name =
            p.name.length > 20 ? p.name.substring(0, 20) + '...' : p.name;
          return `${name} (${p.quantity}x)`;
        })
        .join(', ');
    },
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total Price',
    cell: (row: Order) => {
      return (
        new CurrencyPipe('en-US').transform(
          row.totalPrice,
          'KWD',
          'symbol',
          '1.3-3'
        ) ?? '0.000 KWD'
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (row: Order) => {
      const status = row.status.charAt(0).toUpperCase() + row.status.slice(1);
      return status;
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: () => {
      return '';
    },
  },
];
