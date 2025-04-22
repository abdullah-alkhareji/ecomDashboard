import { Component, ViewChild, TemplateRef } from '@angular/core';
import { HomeCardsComponent } from '../../components/home-cards/home-cards.component';
import { OrdersService } from '../../services/orders.service';
import { ModalComponent } from '../../components/ui/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardsComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild('userIdCell') userIdCell!: TemplateRef<any>;
  @ViewChild('productIdCell') productIdCell!: TemplateRef<any>;

  constructor(private ordersService: OrdersService) {}

  orders = this.ordersService.orders$;
}
