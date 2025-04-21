import { Component } from '@angular/core';
import { HomeCardComponent } from '../home-card/home-card.component';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { ProductsService } from '../../services/products.service';
import { OrdersService } from '../../services/orders.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home-cards',
  standalone: true,
  imports: [HomeCardComponent, CurrencyPipe, AsyncPipe],
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css',
})
export class HomeCardsComponent {
  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
    private ordersService: OrdersService
  ) {}
  users = this.usersService.users$;
  products = this.productsService.products$;
  orders = this.ordersService.orders$;

  totalCustomers = this.getTotalCustomers();
  totalProducts = this.getTotalProducts();
  totalOrders = this.getTotalOrders();
  totalSales = this.getTotalSales();

  getTotalCustomers() {
    return this.usersService.users$.pipe(map((users) => users.length));
  }

  getTotalProducts() {
    const totalProducts = this.productsService.products$.pipe(
      map((products) => products.length)
    );
    ({ totalProducts });
    return totalProducts;
  }

  getTotalOrders() {
    const totalOrders = this.ordersService.orders$.pipe(
      map((orders) => orders.length)
    );
    ({ totalOrders });
    return totalOrders;
  }

  getTotalSales() {
    const totalSales = this.ordersService.orders$.pipe(
      map((orders) => orders.reduce((acc, order) => acc + order.totalPrice, 0))
    );
    ({ totalSales });
    return totalSales;
  }
}
