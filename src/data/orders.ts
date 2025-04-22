import { Product, PRODUCTS } from './products';
import { USERS } from './users';

export interface Order {
  id: number;
  userId: string;
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
    userId: USERS[0].name + ` (${USERS[0].id})`, // Alice Johnson
    products: [
      { ...PRODUCTS[0], quantity: 2, subTotal: 59.98 }, // Wireless Mouse
      { ...PRODUCTS[1], quantity: 3, subTotal: 45.0 }, // Basic T-shirt
      { ...PRODUCTS[2], quantity: 1, subTotal: 199.99 }, // Standing Desk
    ],
    totalPrice: 304.97,
    status: 'delivered',
    orderDate: '2023-06-01T10:30:00Z',
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK123456789',
  },
  {
    id: 2,
    userId: USERS[1].name + ` (${USERS[1].id})`, // Bob Smith
    products: [
      { ...PRODUCTS[3], quantity: 1, subTotal: 129.99 }, // Bluetooth Headphones
      { ...PRODUCTS[4], quantity: 2, subTotal: 399.98 }, // Smart Watch
    ],
    totalPrice: 529.97,
    status: 'cancelled',
    orderDate: '2023-06-05T14:20:00Z',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
    paymentMethod: 'paypal',
  },
  {
    id: 3,
    userId: USERS[2].name + ` (${USERS[2].id})`, // Sarah Lee
    products: [
      { ...PRODUCTS[5], quantity: 2, subTotal: 179.98 }, // Coffee Maker
      { ...PRODUCTS[0], quantity: 1, subTotal: 29.99 }, // Wireless Mouse
      { ...PRODUCTS[3], quantity: 1, subTotal: 129.99 }, // Bluetooth Headphones
    ],
    totalPrice: 339.96,
    status: 'delivered',
    orderDate: '2023-01-10T09:15:00Z',
    shippingAddress: '789 Pine St, Chicago, IL 60601',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK987654321',
  },
  {
    id: 4,
    userId: USERS[3].name + ` (${USERS[3].id})`, // Michael Chen
    products: [
      { ...PRODUCTS[1], quantity: 5, subTotal: 75.0 }, // Basic T-shirt
      { ...PRODUCTS[2], quantity: 1, subTotal: 199.99 }, // Standing Desk
      { ...PRODUCTS[4], quantity: 1, subTotal: 199.99 }, // Smart Watch
    ],
    totalPrice: 474.98,
    status: 'delivered',
    orderDate: '2023-02-08T15:30:00Z',
    shippingAddress: '321 Maple St, Seattle, WA 98101',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK456789123',
  },
  {
    id: 5,
    userId: USERS[4].name + ` (${USERS[4].id})`, // Emma Wilson
    products: [
      { ...PRODUCTS[5], quantity: 1, subTotal: 89.99 }, // Coffee Maker
      { ...PRODUCTS[0], quantity: 3, subTotal: 89.97 }, // Wireless Mouse
      { ...PRODUCTS[1], quantity: 2, subTotal: 30.0 }, // Basic T-shirt
    ],
    totalPrice: 209.96,
    status: 'delivered',
    orderDate: '2022-11-11T11:45:00Z',
    shippingAddress: '654 Cedar Ave, Boston, MA 02108',
    paymentMethod: 'credit card',
  },
  {
    id: 6,
    userId: USERS[5].name + ` (${USERS[5].id})`, // David Brown
    products: [
      { ...PRODUCTS[2], quantity: 2, subTotal: 399.98 }, // Standing Desk
      { ...PRODUCTS[3], quantity: 1, subTotal: 129.99 }, // Bluetooth Headphones
      { ...PRODUCTS[4], quantity: 1, subTotal: 199.99 }, // Smart Watch
    ],
    totalPrice: 729.96,
    status: 'delivered',
    orderDate: '2022-12-12T09:20:00Z',
    shippingAddress: '987 Birch Rd, Austin, TX 78701',
    paymentMethod: 'paypal',
    trackingNumber: 'TRK789123456',
  },
  {
    id: 7,
    userId: USERS[0].name + ` (${USERS[0].id})`, // Alice Johnson - Second order
    products: [
      { ...PRODUCTS[4], quantity: 2, subTotal: 399.98 }, // Smart Watch
    ],
    totalPrice: 399.98,
    status: 'delivered',
    orderDate: '2023-08-05T14:20:00Z',
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK321654987',
  },
  {
    id: 8,
    userId: USERS[3].name + ` (${USERS[3].id})`, // Michael Chen - Second order
    products: [
      { ...PRODUCTS[0], quantity: 4, subTotal: 119.96 }, // Wireless Mouse
    ],
    totalPrice: 119.96,
    status: 'delivered',
    orderDate: '2022-05-28T09:15:00Z',
    shippingAddress: '321 Maple St, Seattle, WA 98101',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK147258369',
  },
  {
    id: 9,
    userId: USERS[3].name + ` (${USERS[3].id})`, // Michael Chen - Third order
    products: [
      { ...PRODUCTS[5], quantity: 3, subTotal: 269.97 }, // Coffee Maker
    ],
    totalPrice: 269.97,
    status: 'delivered',
    orderDate: '2023-10-10T16:45:00Z',
    shippingAddress: '321 Maple St, Seattle, WA 98101',
    paymentMethod: 'credit card',
  },
  {
    id: 10,
    userId: USERS[4].name + ` (${USERS[4].id})`, // Emma Wilson - Second order
    products: [
      { ...PRODUCTS[2], quantity: 1, subTotal: 199.99 }, // Standing Desk
    ],
    totalPrice: 199.99,
    status: 'delivered',
    orderDate: '2023-09-09T13:30:00Z',
    shippingAddress: '654 Cedar Ave, Boston, MA 02108',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK963852741',
  },
  {
    id: 11,
    userId: USERS[2].name + ` (${USERS[2].id})`, // Sarah Lee - Second order
    products: [
      { ...PRODUCTS[3], quantity: 2, subTotal: 259.98 }, // Bluetooth Headphones
    ],
    totalPrice: 259.98,
    status: 'delivered',
    orderDate: '2022-06-12T10:15:00Z',
    shippingAddress: '789 Pine St, Chicago, IL 60601',
    paymentMethod: 'paypal',
  },
  {
    id: 12,
    userId: USERS[0].name + ` (${USERS[0].id})`, // Alice Johnson - Third order
    products: [
      { ...PRODUCTS[1], quantity: 6, subTotal: 90.0 }, // Basic T-shirt
    ],
    totalPrice: 90.0,
    status: 'delivered',
    orderDate: '2022-11-11T11:30:00Z',
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'credit card',
  },
  {
    id: 13,
    userId: USERS[6].name + ` (${USERS[6].id})`, // Olivia Martinez
    products: [
      { ...PRODUCTS[7], quantity: 1, subTotal: 249.99 }, // Ergonomic Office Chair
      { ...PRODUCTS[3], quantity: 1, subTotal: 129.99 }, // Bluetooth Headphones
    ],
    totalPrice: 379.98,
    status: 'delivered',
    orderDate: '2022-02-15T13:45:00Z',
    shippingAddress: '567 Elm St, Miami, FL 33101',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK753159852',
  },
  {
    id: 14,
    userId: USERS[7].name + ` (${USERS[7].id})`, // James Wilson
    products: [
      { ...PRODUCTS[9], quantity: 1, subTotal: 69.99 }, // Blender
      { ...PRODUCTS[5], quantity: 1, subTotal: 89.99 }, // Coffee Maker
    ],
    totalPrice: 159.98,
    status: 'delivered',
    orderDate: '2022-04-23T10:20:00Z',
    shippingAddress: '890 Spruce Ave, Denver, CO 80201',
    paymentMethod: 'paypal',
    trackingNumber: 'TRK258369147',
  },
  {
    id: 15,
    userId: USERS[8].name + ` (${USERS[8].id})`, // Sophia Garcia
    products: [
      { ...PRODUCTS[6], quantity: 1, subTotal: 79.99 }, // Mechanical Keyboard
      { ...PRODUCTS[12], quantity: 1, subTotal: 159.99 }, // External SSD
    ],
    totalPrice: 239.98,
    status: 'delivered',
    orderDate: '2022-07-18T14:15:00Z',
    shippingAddress: '123 Park Ln, Portland, OR 97201',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK369147258',
  },
  {
    id: 16,
    userId: USERS[9].name + ` (${USERS[9].id})`, // Ava Robinson
    products: [
      { ...PRODUCTS[14], quantity: 1, subTotal: 199.99 }, // Digital Drawing Tablet
    ],
    totalPrice: 199.99,
    status: 'delivered',
    orderDate: '2022-09-05T11:30:00Z',
    shippingAddress: '456 River Rd, Nashville, TN 37201',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK852963741',
  },
  {
    id: 17,
    userId: USERS[10].name + ` (${USERS[10].id})`, // Mia Lewis
    products: [
      { ...PRODUCTS[8], quantity: 2, subTotal: 91.98 }, // Denim Jeans
      { ...PRODUCTS[11], quantity: 1, subTotal: 89.99 }, // Winter Jacket
    ],
    totalPrice: 181.97,
    status: 'delivered',
    orderDate: '2023-03-12T09:40:00Z',
    shippingAddress: '789 Beach Ave, San Diego, CA 92101',
    paymentMethod: 'paypal',
    trackingNumber: 'TRK741852963',
  },
  {
    id: 18,
    userId: USERS[10].name + ` (${USERS[10].id})`, // William Taylor
    products: [
      { ...PRODUCTS[15], quantity: 1, subTotal: 119.99 }, // Bookshelf
    ],
    totalPrice: 119.99,
    status: 'cancelled',
    orderDate: '2022-10-18T15:10:00Z',
    shippingAddress: '321 Forest Dr, Philadelphia, PA 19101',
    paymentMethod: 'credit card',
  },
  {
    id: 19,
    userId: USERS[11].name + ` (${USERS[11].id})`, // Thomas Clark
    products: [
      { ...PRODUCTS[4], quantity: 1, subTotal: 199.99 }, // Smart Watch
      { ...PRODUCTS[13], quantity: 1, subTotal: 29.99 }, // Yoga Mat
    ],
    totalPrice: 229.98,
    status: 'delivered',
    orderDate: '2023-04-28T10:35:00Z',
    shippingAddress: '654 Mountain View, Phoenix, AZ 85001',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK159753456',
  },
  {
    id: 20,
    userId: USERS[12].name + ` (${USERS[12].id})`, // Charlotte Walker
    products: [
      { ...PRODUCTS[16], quantity: 2, subTotal: 69.98 }, // LED Desk Lamp
      { ...PRODUCTS[17], quantity: 1, subTotal: 19.99 }, // Water Bottle
    ],
    totalPrice: 89.97,
    status: 'delivered',
    orderDate: '2023-02-15T13:25:00Z',
    shippingAddress: '987 Valley Rd, Dallas, TX 75201',
    paymentMethod: 'paypal',
    trackingNumber: 'TRK456123789',
  },
  {
    id: 21,
    userId: USERS[13].name + ` (${USERS[13].id})`, // Ethan Young
    products: [
      { ...PRODUCTS[10], quantity: 1, subTotal: 129.99 }, // Air Purifier
    ],
    totalPrice: 129.99,
    status: 'delivered',
    orderDate: '2023-05-21T11:50:00Z',
    shippingAddress: '321 Lakeview Apt, Chicago, IL 60602',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK789456123',
  },
  {
    id: 22,
    userId: USERS[7].name + ` (${USERS[7].id})`, // Olivia Martinez - Second order
    products: [
      { ...PRODUCTS[9], quantity: 1, subTotal: 69.99 }, // Blender
    ],
    totalPrice: 69.99,
    status: 'delivered',
    orderDate: '2022-06-03T14:45:00Z',
    shippingAddress: '567 Elm St, Miami, FL 33101',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK123789456',
  },
  {
    id: 23,
    userId: USERS[7].name + ` (${USERS[7].id})`, // James Wilson - Second order
    products: [
      { ...PRODUCTS[3], quantity: 1, subTotal: 129.99 }, // Bluetooth Headphones
      { ...PRODUCTS[4], quantity: 1, subTotal: 199.99 }, // Smart Watch
    ],
    totalPrice: 329.98,
    status: 'delivered',
    orderDate: '2022-08-14T09:15:00Z',
    shippingAddress: '890 Spruce Ave, Denver, CO 80201',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK456789012',
  },
  {
    id: 24,
    userId: USERS[1].name + ` (${USERS[1].id})`, // Bob Smith - Second order
    products: [
      { ...PRODUCTS[0], quantity: 2, subTotal: 59.98 }, // Wireless Mouse
    ],
    totalPrice: 59.98,
    status: 'cancelled',
    orderDate: '2022-07-28T15:20:00Z',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
    paymentMethod: 'paypal',
  },
  {
    id: 25,
    userId: USERS[0].name + ` (${USERS[0].id})`, // Alice Johnson - Fourth order
    products: [
      { ...PRODUCTS[17], quantity: 1, subTotal: 19.99 }, // Water Bottle
      { ...PRODUCTS[13], quantity: 1, subTotal: 29.99 }, // Yoga Mat
    ],
    totalPrice: 49.98,
    status: 'delivered',
    orderDate: '2023-11-05T10:30:00Z',
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK987654123',
  },
  {
    id: 26,
    userId: USERS[4].name + ` (${USERS[4].id})`, // Emma Wilson - Third order
    products: [
      { ...PRODUCTS[10], quantity: 1, subTotal: 129.99 }, // Air Purifier
      { ...PRODUCTS[16], quantity: 1, subTotal: 34.99 }, // LED Desk Lamp
    ],
    totalPrice: 164.98,
    status: 'delivered',
    orderDate: '2023-12-12T13:40:00Z',
    shippingAddress: '654 Cedar Ave, Boston, MA 02108',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK321987654',
  },
  {
    id: 27,
    userId: USERS[8].name + ` (${USERS[8].id})`, // Sophia Garcia - Second order
    products: [
      { ...PRODUCTS[8], quantity: 1, subTotal: 45.99 }, // Denim Jeans
    ],
    totalPrice: 45.99,
    status: 'delivered',
    orderDate: '2023-09-30T11:25:00Z',
    shippingAddress: '123 Park Ln, Portland, OR 97201',
    paymentMethod: 'paypal',
    trackingNumber: 'TRK654321987',
  },
  {
    id: 28,
    userId: USERS[13].name + ` (${USERS[13].id})`, // Mia Lewis - Second order
    products: [
      { ...PRODUCTS[15], quantity: 1, subTotal: 119.99 }, // Bookshelf
      { ...PRODUCTS[7], quantity: 1, subTotal: 249.99 }, // Ergonomic Office Chair
    ],
    totalPrice: 369.98,
    status: 'delivered',
    orderDate: '2023-07-14T10:15:00Z',
    shippingAddress: '789 Beach Ave, San Diego, CA 92101',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK987123654',
  },
  {
    id: 29,
    userId: USERS[9].name + ` (${USERS[9].id})`, // Ava Robinson - Second order
    products: [
      { ...PRODUCTS[6], quantity: 1, subTotal: 79.99 }, // Mechanical Keyboard
    ],
    totalPrice: 79.99,
    status: 'delivered',
    orderDate: '2023-08-27T14:30:00Z',
    shippingAddress: '456 River Rd, Nashville, TN 37201',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK123456987',
  },
  {
    id: 30,
    userId: USERS[3].name + ` (${USERS[3].id})`, // Michael Chen - Fourth order
    products: [
      { ...PRODUCTS[12], quantity: 1, subTotal: 159.99 }, // External SSD
      { ...PRODUCTS[14], quantity: 1, subTotal: 199.99 }, // Digital Drawing Tablet
    ],
    totalPrice: 359.98,
    status: 'delivered',
    orderDate: '2022-09-19T12:40:00Z',
    shippingAddress: '321 Maple St, Seattle, WA 98101',
    paymentMethod: 'paypal',
    trackingNumber: 'TRK456987123',
  },
  {
    id: 31,
    userId: USERS[2].name + ` (${USERS[2].id})`, // Sarah Lee - Third order
    products: [
      { ...PRODUCTS[9], quantity: 1, subTotal: 69.99 }, // Blender
      { ...PRODUCTS[5], quantity: 1, subTotal: 89.99 }, // Coffee Maker
    ],
    totalPrice: 159.98,
    status: 'delivered',
    orderDate: '2022-10-08T09:15:00Z',
    shippingAddress: '789 Pine St, Chicago, IL 60601',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK789123456',
  },
  {
    id: 32,
    userId: USERS[5].name + ` (${USERS[5].id})`, // David Brown - Second order
    products: [
      { ...PRODUCTS[0], quantity: 1, subTotal: 29.99 }, // Wireless Mouse
      { ...PRODUCTS[6], quantity: 1, subTotal: 79.99 }, // Mechanical Keyboard
    ],
    totalPrice: 109.98,
    status: 'delivered',
    orderDate: '2022-03-15T15:30:00Z',
    shippingAddress: '987 Birch Rd, Austin, TX 78701',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK654987123',
  },
  {
    id: 33,
    userId: USERS[12].name + ` (${USERS[12].id})`, // Charlotte Walker - Second order
    products: [
      { ...PRODUCTS[11], quantity: 1, subTotal: 89.99 }, // Winter Jacket
    ],
    totalPrice: 89.99,
    status: 'cancelled',
    orderDate: '2022-08-30T10:20:00Z',
    shippingAddress: '987 Valley Rd, Dallas, TX 75201',
    paymentMethod: 'credit card',
  },
  {
    id: 34,
    userId: USERS[11].name + ` (${USERS[11].id})`, // Thomas Clark - Second order
    products: [
      { ...PRODUCTS[7], quantity: 1, subTotal: 249.99 }, // Ergonomic Office Chair
    ],
    totalPrice: 249.99,
    status: 'delivered',
    orderDate: '2023-11-22T14:35:00Z',
    shippingAddress: '654 Mountain View, Phoenix, AZ 85001',
    paymentMethod: 'paypal',
    trackingNumber: 'TRK321456789',
  },
  {
    id: 35,
    userId: USERS[13].name + ` (${USERS[13].id})`, // Ethan Young - Second order
    products: [
      { ...PRODUCTS[17], quantity: 2, subTotal: 39.98 }, // Water Bottle
      { ...PRODUCTS[13], quantity: 1, subTotal: 29.99 }, // Yoga Mat
    ],
    totalPrice: 69.97,
    status: 'delivered',
    orderDate: '2023-10-14T11:25:00Z',
    shippingAddress: '321 Lakeview Apt, Chicago, IL 60602',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK987321654',
  },
  {
    id: 36,
    userId: USERS[10].name + ` (${USERS[10].id})`, // William Taylor - Second order
    products: [
      { ...PRODUCTS[3], quantity: 1, subTotal: 129.99 }, // Bluetooth Headphones
    ],
    totalPrice: 129.99,
    status: 'delivered',
    orderDate: '2022-12-05T09:40:00Z',
    shippingAddress: '321 Forest Dr, Philadelphia, PA 19101',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK654321789',
  },
  // 2024 orders
  {
    id: 37,
    userId: USERS[0].name + ` (${USERS[0].id})`, // Alice Johnson
    products: [
      { ...PRODUCTS[16], quantity: 1, subTotal: 34.99 }, // LED Desk Lamp
      { ...PRODUCTS[12], quantity: 1, subTotal: 159.99 }, // External SSD
    ],
    totalPrice: 194.98,
    status: 'delivered',
    orderDate: '2024-01-10T13:30:00Z',
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK202401001',
  },
  {
    id: 38,
    userId: USERS[2].name + ` (${USERS[2].id})`, // Sarah Lee
    products: [
      { ...PRODUCTS[14], quantity: 1, subTotal: 199.99 }, // Digital Drawing Tablet
    ],
    totalPrice: 199.99,
    status: 'delivered',
    orderDate: '2024-01-23T10:15:00Z',
    shippingAddress: '789 Pine St, Chicago, IL 60601',
    paymentMethod: 'paypal',
    trackingNumber: 'TRK202401002',
  },
  {
    id: 39,
    userId: USERS[4].name + ` (${USERS[4].id})`, // Emma Wilson
    products: [
      { ...PRODUCTS[2], quantity: 1, subTotal: 199.99 }, // Standing Desk
      { ...PRODUCTS[7], quantity: 1, subTotal: 249.99 }, // Ergonomic Office Chair
    ],
    totalPrice: 449.98,
    status: 'delivered',
    orderDate: '2024-02-05T14:20:00Z',
    shippingAddress: '654 Cedar Ave, Boston, MA 02108',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK202402001',
  },
  {
    id: 40,
    userId: USERS[7].name + ` (${USERS[7].id})`, // James Wilson
    products: [
      { ...PRODUCTS[4], quantity: 1, subTotal: 199.99 }, // Smart Watch
    ],
    totalPrice: 199.99,
    status: 'delivered',
    orderDate: '2024-02-18T09:30:00Z',
    shippingAddress: '890 Spruce Ave, Denver, CO 80201',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK202402002',
  },
  {
    id: 41,
    userId: USERS[8].name + ` (${USERS[8].id})`, // Sophia Garcia
    products: [
      { ...PRODUCTS[11], quantity: 1, subTotal: 89.99 }, // Winter Jacket
    ],
    totalPrice: 89.99,
    status: 'delivered',
    orderDate: '2024-03-07T11:45:00Z',
    shippingAddress: '123 Park Ln, Portland, OR 97201',
    paymentMethod: 'paypal',
    trackingNumber: 'TRK202403001',
  },
  {
    id: 42,
    userId: USERS[3].name + ` (${USERS[3].id})`, // Michael Chen
    products: [
      { ...PRODUCTS[6], quantity: 1, subTotal: 79.99 }, // Mechanical Keyboard
      { ...PRODUCTS[0], quantity: 1, subTotal: 29.99 }, // Wireless Mouse
    ],
    totalPrice: 109.98,
    status: 'delivered',
    orderDate: '2024-03-20T15:10:00Z',
    shippingAddress: '321 Maple St, Seattle, WA 98101',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK202403002',
  },
  {
    id: 43,
    userId: USERS[9].name + ` (${USERS[9].id})`, // Ava Robinson
    products: [
      { ...PRODUCTS[15], quantity: 1, subTotal: 119.99 }, // Bookshelf
    ],
    totalPrice: 119.99,
    status: 'delivered',
    orderDate: '2024-04-05T10:25:00Z',
    shippingAddress: '456 River Rd, Nashville, TN 37201',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK202404001',
  },
  {
    id: 44,
    userId: USERS[7].name + ` (${USERS[7].id})`, // Olivia Martinez
    products: [
      { ...PRODUCTS[10], quantity: 1, subTotal: 129.99 }, // Air Purifier
    ],
    totalPrice: 129.99,
    status: 'delivered',
    orderDate: '2024-04-18T13:50:00Z',
    shippingAddress: '567 Elm St, Miami, FL 33101',
    paymentMethod: 'paypal',
    trackingNumber: 'TRK202404002',
  },
  {
    id: 45,
    userId: USERS[13].name + ` (${USERS[13].id})`, // Mia Lewis
    products: [
      { ...PRODUCTS[17], quantity: 2, subTotal: 39.98 }, // Water Bottle
      { ...PRODUCTS[13], quantity: 1, subTotal: 29.99 }, // Yoga Mat
    ],
    totalPrice: 69.97,
    status: 'delivered',
    orderDate: '2024-05-03T11:15:00Z',
    shippingAddress: '789 Beach Ave, San Diego, CA 92101',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK202405001',
  },
  {
    id: 46,
    userId: USERS[1].name + ` (${USERS[1].id})`, // Bob Smith
    products: [
      { ...PRODUCTS[16], quantity: 1, subTotal: 34.99 }, // LED Desk Lamp
    ],
    totalPrice: 34.99,
    status: 'processing',
    orderDate: '2024-05-21T14:30:00Z',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK202405002',
  },
  {
    id: 47,
    userId: USERS[13].name + ` (${USERS[13].id})`, // Ethan Young
    products: [
      { ...PRODUCTS[3], quantity: 1, subTotal: 129.99 }, // Bluetooth Headphones
      { ...PRODUCTS[5], quantity: 1, subTotal: 89.99 }, // Coffee Maker
    ],
    totalPrice: 219.98,
    status: 'shipped',
    orderDate: '2024-06-02T09:40:00Z',
    shippingAddress: '321 Lakeview Apt, Chicago, IL 60602',
    paymentMethod: 'credit card',
    trackingNumber: 'TRK202406001',
  },
  {
    id: 48,
    userId: USERS[12].name + ` (${USERS[12].id})`, // Charlotte Walker
    products: [
      { ...PRODUCTS[9], quantity: 1, subTotal: 69.99 }, // Blender
    ],
    totalPrice: 69.99,
    status: 'processing',
    orderDate: '2024-06-10T15:20:00Z',
    shippingAddress: '987 Valley Rd, Dallas, TX 75201',
    paymentMethod: 'paypal',
  },
  {
    id: 49,
    userId: USERS[5].name + ` (${USERS[5].id})`, // David Brown
    products: [
      { ...PRODUCTS[12], quantity: 1, subTotal: 159.99 }, // External SSD
    ],
    totalPrice: 159.99,
    status: 'pending',
    orderDate: '2024-06-12T10:30:00Z',
    shippingAddress: '987 Birch Rd, Austin, TX 78701',
    paymentMethod: 'credit card',
  },
  {
    id: 50,
    userId: USERS[0].name + ` (${USERS[0].id})`, // Alice Johnson
    products: [
      { ...PRODUCTS[8], quantity: 2, subTotal: 91.98 }, // Denim Jeans
    ],
    totalPrice: 91.98,
    status: 'pending',
    orderDate: '2024-06-13T12:45:00Z',
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'credit card',
  },
];
