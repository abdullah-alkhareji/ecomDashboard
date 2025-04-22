import { Component, Input } from '@angular/core';
import { ModalComponent } from '../ui/modal/modal.component';
import { Order } from '../../../data/orders';
import { OrdersService } from '../../services/orders.service';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { EditOrderFormComponent } from '../edit-order-form/edit-order-form.component';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [ModalComponent, DatePipe, CurrencyPipe, EditOrderFormComponent],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css',
})
export class OrdersTableComponent {
  constructor(private ordersService: OrdersService) {}

  @Input() orders: Order[] | null = null;
  isEditModalOpen = false;
  selectedOrder: Order | null = null;
  isDeleteModalOpen = false;

  // Pagination properties
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;

  get paginatedOrders(): Order[] | null {
    if (!this.orders) return null;

    this.totalPages = Math.ceil(this.orders.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.orders.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onEditOrder(event: { id: number; order: Order }) {
    this.ordersService.updateOrder(event.id, event.order);
    this.isEditModalOpen = false;
  }

  onDeleteOrder(order: Order) {
    this.ordersService.deleteOrder(order.id);
  }

  onCloseModal() {
    this.isEditModalOpen = false;
  }

  openEditModal(order: Order) {
    this.selectedOrder = order;
    this.isEditModalOpen = true;
  }
}
