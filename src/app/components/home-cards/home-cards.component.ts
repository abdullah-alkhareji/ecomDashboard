import { Component } from '@angular/core';
import { HomeCardComponent } from '../home-card/home-card.component';
import { USERS } from '../../../data/users';
import { PRODUCTS } from '../../../data/products';
import { ORDERS } from '../../../data/orders';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-home-cards',
  standalone: true,
  imports: [HomeCardComponent, CurrencyPipe],
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css',
})
export class HomeCardsComponent {
  users = USERS;
  products = PRODUCTS;
  orders = ORDERS;

  totalCustomers = this.getTotalCustomers();
  totalProducts = this.getTotalProducts();
  totalOrders = this.getTotalOrders();
  totalSales = this.getTotalSales();

  getTotalCustomers() {
    return this.users.length;
  }

  getTotalProducts() {
    return this.products.length;
  }

  getTotalOrders() {
    return this.orders.length;
  }

  getTotalSales() {
    return this.orders.reduce((acc, order) => acc + order.totalPrice, 0);
  }
}
