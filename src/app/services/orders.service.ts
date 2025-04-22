import { Injectable, signal } from '@angular/core';
import { Order, ORDERS } from '../../data/orders';
import { UsersService } from './users.service';
import { User, USERS } from '../../data/users';
import { ProductsService } from './products.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private _orders = new BehaviorSubject<Order[]>(ORDERS);
  orders$ = this._orders.asObservable();

  constructor(
    private usersService: UsersService,
    private productsService: ProductsService
  ) {}

  getOrders() {
    return this._orders.value;
  }

  getOrder(id: number) {
    return this._orders.value.find((order) => order.id === id);
  }

  getOrderProducts(id: number) {
    return this._orders.value.find((order) => order.id === id)?.products;
  }

  getOrderTotalPrice(id: number) {
    return this._orders.value.find((order) => order.id === id)?.totalPrice;
  }

  createOrder(order: Order) {
    this._orders.next([...this._orders.value, order]);
  }

  updateOrder(id: number, order: Order) {
    this._orders.next(this._orders.value.map((o) => (o.id === id ? order : o)));
  }

  deleteOrder(id: number) {
    this._orders.next(this._orders.value.filter((order) => order.id !== id));
  }

  getOrderStatus(id: number) {
    return this._orders.value.find((order) => order.id === id)?.status;
  }

  getOrderQuantity(id: number) {
    return this._orders.value
      .find((order) => order.id === id)
      ?.products.reduce((acc, product) => acc + product.quantity, 0);
  }
}
