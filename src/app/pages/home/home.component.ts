import { Component, ViewChild, TemplateRef } from '@angular/core';
import { HomeCardsComponent } from '../../components/home-cards/home-cards.component';
import { OrdersService } from '../../services/orders.service';
import { SalesChartComponent } from "../../components/sales-chart/sales-chart.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardsComponent, SalesChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild('userIdCell') userIdCell!: TemplateRef<any>;
  @ViewChild('productIdCell') productIdCell!: TemplateRef<any>;

  constructor(private ordersService: OrdersService) {}

  orders = this.ordersService.orders$;
}
