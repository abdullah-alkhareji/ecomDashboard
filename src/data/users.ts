export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
  lastLogin: string | null;
  isEmailVerified: boolean;
  avatarUrl: string;
}

export interface UserForm {
  name: string;
  email: string;
  role: string;
  status: string;
  avatarUrl: string;
}

export const USERS: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-15T08:30:00Z',
    lastLogin: '2024-06-01T12:15:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'customer',
    status: 'banned',
    createdAt: '2023-11-10T14:45:00Z',
    lastLogin: null,
    isEmailVerified: false,
    avatarUrl: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: 3,
    name: 'Sarah Lee',
    email: 'sarah@example.com',
    role: 'manager',
    status: 'inactive',
    createdAt: '2024-03-01T09:00:00Z',
    lastLogin: '2024-06-10T18:40:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=3',
  },
  {
    id: 4,
    name: 'Michael Chen',
    email: 'michael@example.com',
    role: 'customer',
    status: 'active',
    createdAt: '2024-02-15T10:30:00Z',
    lastLogin: '2024-06-12T09:45:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=4',
  },
  {
    id: 5,
    name: 'Emma Wilson',
    email: 'emma@example.com',
    role: 'manager',
    status: 'active',
    createdAt: '2024-01-05T14:20:00Z',
    lastLogin: '2024-06-11T16:30:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=5',
  },
  {
    id: 6,
    name: 'David Brown',
    email: 'david@example.com',
    role: 'customer',
    status: 'inactive',
    createdAt: '2024-03-20T11:15:00Z',
    lastLogin: '2024-05-28T13:40:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=6',
  },
];
