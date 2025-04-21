import { Component, ViewChild, TemplateRef } from '@angular/core';
import { HomeCardsComponent } from '../../components/home-cards/home-cards.component';
import { DataTableComponent } from '../../components/ui/data-table/data-table.component';
import { OrdersService } from '../../services/orders.service';
import { createColumns } from './columns';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardsComponent, DataTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild('userIdCell') userIdCell!: TemplateRef<any>;
  @ViewChild('productIdCell') productIdCell!: TemplateRef<any>;

  constructor(private ordersService: OrdersService) {}

  columns = createColumns(this.ordersService);
  orders = this.ordersService.getOrders();
}
