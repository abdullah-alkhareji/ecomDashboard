import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/ui/data-table/data-table.component';
import { OrdersService } from '../../services/orders.service';
import { createColumns } from './columns';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  orders = this.ordersService.getOrders();
  columns = createColumns(this.ordersService);

  constructor(private ordersService: OrdersService) {}
}
