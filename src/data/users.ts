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
    createdAt: '2023-01-15T08:30:00Z',
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
    createdAt: '2022-11-10T14:45:00Z',
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
    createdAt: '2023-03-01T09:00:00Z',
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
    createdAt: '2022-02-15T10:30:00Z',
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
    createdAt: '2021-01-05T14:20:00Z',
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
    createdAt: '2023-03-20T11:15:00Z',
    lastLogin: '2024-05-28T13:40:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=6',
  },
  {
    id: 7,
    name: 'Olivia Martinez',
    email: 'olivia@example.com',
    role: 'customer',
    status: 'active',
    createdAt: '2021-05-12T09:25:00Z',
    lastLogin: '2024-06-05T11:30:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=7',
  },
  {
    id: 8,
    name: 'James Wilson',
    email: 'james@example.com',
    role: 'manager',
    status: 'active',
    createdAt: '2022-07-18T13:40:00Z',
    lastLogin: '2024-06-09T15:20:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=8',
  },
  {
    id: 9,
    name: 'Sophia Garcia',
    email: 'sophia@example.com',
    role: 'customer',
    status: 'active',
    createdAt: '2022-09-30T10:15:00Z',
    lastLogin: '2024-06-02T14:10:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=9',
  },
  {
    id: 10,
    name: 'William Taylor',
    email: 'william@example.com',
    role: 'customer',
    status: 'inactive',
    createdAt: '2023-08-05T08:50:00Z',
    lastLogin: '2024-03-15T09:30:00Z',
    isEmailVerified: false,
    avatarUrl: 'https://i.pravatar.cc/100?img=10',
  },
  {
    id: 11,
    name: 'Ava Robinson',
    email: 'ava@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2021-11-22T14:20:00Z',
    lastLogin: '2024-06-10T10:45:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=11',
  },
  {
    id: 12,
    name: 'Thomas Clark',
    email: 'thomas@example.com',
    role: 'customer',
    status: 'banned',
    createdAt: '2021-03-14T11:10:00Z',
    lastLogin: '2023-12-18T16:25:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=12',
  },
  {
    id: 13,
    name: 'Mia Lewis',
    email: 'mia@example.com',
    role: 'customer',
    status: 'active',
    createdAt: '2022-05-30T09:40:00Z',
    lastLogin: '2024-06-07T13:15:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=13',
  },
  {
    id: 14,
    name: 'Ethan Young',
    email: 'ethan@example.com',
    role: 'manager',
    status: 'active',
    createdAt: '2023-02-11T15:30:00Z',
    lastLogin: '2024-06-11T11:20:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=14',
  },
  {
    id: 15,
    name: 'Charlotte Walker',
    email: 'charlotte@example.com',
    role: 'customer',
    status: 'active',
    createdAt: '2021-09-17T10:55:00Z',
    lastLogin: '2024-05-29T14:40:00Z',
    isEmailVerified: true,
    avatarUrl: 'https://i.pravatar.cc/100?img=15',
  },
];
