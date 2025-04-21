import { Injectable, signal } from '@angular/core';
import { Order, ORDERS } from '../../data/orders';
import { UsersService } from './users.service';
import { User, USERS } from '../../data/users';
import { ProductsService } from './products.service';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private _orders = signal<Order[]>(ORDERS);
  orders$ = toObservable(this._orders);

  constructor(
    private usersService: UsersService,
    private productsService: ProductsService
  ) {}

  getOrders() {
    return this._orders();
  }

  getOrder(id: number) {
    return this._orders().find((order) => order.id === id);
  }

  getOrderUser(id: number) {
    const order = this.getOrder(id);
    return this.usersService.getUser(order?.userId ?? -1);
  }

  getOrderProducts(id: number) {
    return this._orders().find((order) => order.id === id)?.products;
  }

  getOrderTotalPrice(id: number) {
    return this._orders().find((order) => order.id === id)?.totalPrice;
  }

  createOrder(order: Order) {
    this._orders().push(order);
  }

  updateOrder(id: number, order: Order) {
    this._orders.update((orders) =>
      orders.map((o) => (o.id === id ? order : o))
    );
  }

  deleteOrder(id: number) {
    this._orders.update((orders) => orders.filter((order) => order.id !== id));
  }

  getOrderStatus(id: number) {
    return this._orders().find((order) => order.id === id)?.status;
  }

  getOrderProduct(id: number) {
    return this.productsService.getProduct(id);
  }

  getOrderUserName(id: number) {
    return this.usersService.getUser(
      this._orders().find((order) => order.id === id)?.userId ?? -1
    )?.name;
  }

  getOrderQuantity(id: number) {
    return this._orders()
      .find((order) => order.id === id)
      ?.products.reduce((acc, product) => acc + product.quantity, 0);
  }
}
