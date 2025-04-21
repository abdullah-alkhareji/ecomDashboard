import { DatePipe } from '@angular/common';
import { ColumnDef } from '../../components/ui/data-table/types';
import { User } from '../../../data/users';

export const createColumns = (

): ColumnDef<User>[] => [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'User',
    cell: (row: User) => {
      return row.name;
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: (row: User) => {
      return row.email;
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: (row: User) => {
      return row.role;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (row: User) => {
      return row.status;
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: (row: User) => {
      return row.createdAt
        ? new DatePipe('en-US')
            .transform(row.createdAt, 'dd/MM/yyyy')
            ?.toString() ?? '-'
        : '-';
    },
  },
  {
    accessorKey: 'lastLogin',
    header: 'Last Login',
    cell: (row: User) => {
      return row.lastLogin
        ? new DatePipe('en-US')
            .transform(row.lastLogin, 'dd/MM/yyyy')
            ?.toString() ?? '-'
        : '-';
    },
  },
  {
    accessorKey: 'isEmailVerified',
    header: 'Email Verified',
    cell: (row: User) => {
      return row.isEmailVerified ? 'Yes' : 'No';
    },
  },
  {
    accessorKey: 'avatarUrl',
    header: 'Avatar',
    cell: (row: User) => {
      return row.avatarUrl;
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: (row: User) => '',
  },
];
