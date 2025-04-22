import { Component } from '@angular/core';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { OrdersService } from '../../services/orders.service';
import { AsyncPipe } from '@angular/common';
import { Order } from '../../../data/orders';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [OrdersTableComponent, AsyncPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  orders = this.ordersService.orders$;

  constructor(private ordersService: OrdersService) {}

  deleteOrder = (order: Order) => {
    this.ordersService.deleteOrder(order.id);
  };
}
