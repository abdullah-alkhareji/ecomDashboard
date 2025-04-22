import { Product, PRODUCTS } from './products';

export interface Order {
  id: number;
  userId: number;
  products: (Product & { quantity: number; subTotal: number })[];
  totalPrice: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  shippingAddress: string;
  paymentMethod: string;
  trackingNumber?: string;
}

export const ORDERS: Order[] = [
  {
    id: 1,
    userId: 1, // Alice Johnson
    products: [
      { ...PRODUCTS[0], quantity: 2, subTotal: 59.98 }, // Wireless Mouse
      { ...PRODUCTS[1], quantity: 3, subTotal: 45.0 }, // Basic T-shirt
      { ...PRODUCTS[2], quantity: 1, subTotal: 199.99 }, // Standing Desk
    ],
    totalPrice: 304.97,
    status: 'delivered',
    orderDate: '2024-06-01T10:30:00Z',
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK123456789',
  },
  {
    id: 2,
    userId: 2, // Bob Smith
    products: [
      { ...PRODUCTS[3], quantity: 1, subTotal: 129.99 }, // Bluetooth Headphones
      { ...PRODUCTS[4], quantity: 2, subTotal: 399.98 }, // Smart Watch
    ],
    totalPrice: 529.97,
    status: 'cancelled',
    orderDate: '2024-06-05T14:20:00Z',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
    paymentMethod: 'paypal',
  },
  {
    id: 3,
    userId: 3, // Sarah Lee
    products: [
      { ...PRODUCTS[5], quantity: 2, subTotal: 179.98 }, // Coffee Maker
      { ...PRODUCTS[0], quantity: 1, subTotal: 29.99 }, // Wireless Mouse
      { ...PRODUCTS[3], quantity: 1, subTotal: 129.99 }, // Bluetooth Headphones
    ],
    totalPrice: 339.96,
    status: 'processing',
    orderDate: '2024-06-10T09:15:00Z',
    shippingAddress: '789 Pine St, Chicago, IL 60601',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK987654321',
  },
  {
    id: 4,
    userId: 4, // Michael Chen
    products: [
      { ...PRODUCTS[1], quantity: 5, subTotal: 75.0 }, // Basic T-shirt
      { ...PRODUCTS[2], quantity: 1, subTotal: 199.99 }, // Standing Desk
      { ...PRODUCTS[4], quantity: 1, subTotal: 199.99 }, // Smart Watch
    ],
    totalPrice: 474.98,
    status: 'shipped',
    orderDate: '2024-06-08T15:30:00Z',
    shippingAddress: '321 Maple St, Seattle, WA 98101',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK456789123',
  },
  {
    id: 5,
    userId: 5, // Emma Wilson
    products: [
      { ...PRODUCTS[5], quantity: 1, subTotal: 89.99 }, // Coffee Maker
      { ...PRODUCTS[0], quantity: 3, subTotal: 89.97 }, // Wireless Mouse
      { ...PRODUCTS[1], quantity: 2, subTotal: 30.0 }, // Basic T-shirt
    ],
    totalPrice: 209.96,
    status: 'pending',
    orderDate: '2024-06-11T11:45:00Z',
    shippingAddress: '654 Cedar Ave, Boston, MA 02108',
    paymentMethod: 'credit card',
  },
  {
    id: 6,
    userId: 6, // David Brown
    products: [
      { ...PRODUCTS[2], quantity: 2, subTotal: 399.98 }, // Standing Desk
      { ...PRODUCTS[3], quantity: 1, subTotal: 129.99 }, // Bluetooth Headphones
      { ...PRODUCTS[4], quantity: 1, subTotal: 199.99 }, // Smart Watch
    ],
    totalPrice: 729.96,
    status: 'processing',
    orderDate: '2024-06-12T09:20:00Z',
    shippingAddress: '987 Birch Rd, Austin, TX 78701',
    paymentMethod: 'paypal',
    trackingNumber: 'TRK789123456',
  },
  {
    id: 7,
    userId: 1, // Alice Johnson - Second order
    products: [
      { ...PRODUCTS[4], quantity: 2, subTotal: 399.98 }, // Smart Watch
    ],
    totalPrice: 399.98,
    status: 'delivered',
    orderDate: '2024-06-05T14:20:00Z',
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK321654987',
  },
  {
    id: 8,
    userId: 4, // Michael Chen - Second order
    products: [
      { ...PRODUCTS[0], quantity: 4, subTotal: 119.96 }, // Wireless Mouse
    ],
    totalPrice: 119.96,
    status: 'delivered',
    orderDate: '2024-05-28T09:15:00Z',
    shippingAddress: '321 Maple St, Seattle, WA 98101',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK147258369',
  },
  {
    id: 9,
    userId: 4, // Michael Chen - Third order
    products: [
      { ...PRODUCTS[5], quantity: 3, subTotal: 269.97 }, // Coffee Maker
    ],
    totalPrice: 269.97,
    status: 'processing',
    orderDate: '2024-06-10T16:45:00Z',
    shippingAddress: '321 Maple St, Seattle, WA 98101',
    paymentMethod: 'credit card',
  },
  {
    id: 10,
    userId: 5, // Emma Wilson - Second order
    products: [
      { ...PRODUCTS[2], quantity: 1, subTotal: 199.99 }, // Standing Desk
    ],
    totalPrice: 199.99,
    status: 'shipped',
    orderDate: '2024-06-09T13:30:00Z',
    shippingAddress: '654 Cedar Ave, Boston, MA 02108',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK963852741',
  },
  {
    id: 11,
    userId: 3, // Sarah Lee - Second order
    products: [
      { ...PRODUCTS[3], quantity: 2, subTotal: 259.98 }, // Bluetooth Headphones
    ],
    totalPrice: 259.98,
    status: 'pending',
    orderDate: '2024-06-12T10:15:00Z',
    shippingAddress: '789 Pine St, Chicago, IL 60601',
    paymentMethod: 'paypal',
  },
  {
    id: 12,
    userId: 1, // Alice Johnson - Third order
    products: [
      { ...PRODUCTS[1], quantity: 6, subTotal: 90.0 }, // Basic T-shirt
    ],
    totalPrice: 90.0,
    status: 'processing',
    orderDate: '2024-06-11T11:30:00Z',
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'credit card',
  },
];
