import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/ui/data-table/data-table.component';
import { OrdersService } from '../../services/orders.service';
import { createColumns } from './columns';
import { AsyncPipe } from '@angular/common';
import { Order } from '../../../data/orders';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [DataTableComponent, AsyncPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  orders = this.ordersService.orders$;
  columns = createColumns(this.ordersService);

  constructor(private ordersService: OrdersService) {}

  deleteOrder = (order: Order) => {
    this.ordersService.deleteOrder(order.id);
  };
}
