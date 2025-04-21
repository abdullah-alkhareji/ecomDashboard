import { Injectable } from '@angular/core';
import { Order, ORDERS } from '../../data/orders';
import { UsersService } from './users.service';
import { User, USERS } from '../../data/users';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders = ORDERS;

  constructor(
    private usersService: UsersService,
    private productsService: ProductsService
  ) {}

  getOrders() {
    return this.orders;
  }

  getOrder(id: number) {
    return this.orders.find((order) => order.id === id);
  }

  getOrderUser(id: number) {
    const order = this.getOrder(id);
    return this.usersService.getUser(order?.userId ?? -1);
  }

  getOrderProducts(id: number) {
    return this.orders.find((order) => order.id === id)?.products;
  }

  getOrderTotalPrice(id: number) {
    return this.orders.find((order) => order.id === id)?.totalPrice;
  }

  createOrder(order: Order) {
    this.orders.push(order);
  }

  updateOrder(id: number, order: Order) {
    this.orders[id] = order;
  }

  deleteOrder(id: number) {
    this.orders.splice(id, 1);
  }

  getOrderStatus(id: number) {
    return this.orders.find((order) => order.id === id)?.status;
  }

  getOrderProduct(id: number) {
    return this.productsService.getProduct(id);
  }

  getOrderUserName(id: number) {
    return this.usersService.getUser(
      this.orders.find((order) => order.id === id)?.userId ?? -1
    )?.name;
  }

  getOrderQuantity(id: number) {
    return this.orders
      .find((order) => order.id === id)
      ?.products.reduce((acc, product) => acc + product.quantity, 0);
  }
}
