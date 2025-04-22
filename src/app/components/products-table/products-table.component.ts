import { Component, Input } from '@angular/core';
import { ModalComponent } from '../ui/modal/modal.component';
import { Product, ProductForm } from '../../../data/products';
import { ProductsService } from '../../services/products.service';
import { DatePipe, CurrencyPipe, SlicePipe } from '@angular/common';
import { EditProductFormComponent } from '../edit-product-form/edit-product-form.component';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [
    ModalComponent,
    DatePipe,
    EditProductFormComponent,
    CurrencyPipe,
    SlicePipe,
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css',
})
export class ProductsTableComponent {
  constructor(private productsService: ProductsService) {}

  @Input() products: Product[] | null = null;
  isEditModalOpen = false;
  selectedProduct: Product | null = null;
  isDeleteModalOpen = false;

  // Pagination properties
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;

  get paginatedProducts(): Product[] | null {
    if (!this.products) return null;

    this.totalPages = Math.ceil(this.products.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onEditProduct(event: { id: number; product: ProductForm }) {
    this.productsService.updateProduct(event.id, event.product);
    this.isEditModalOpen = false;
  }

  onDeleteProduct(product: Product) {
    this.productsService.deleteProduct(product.id);
  }

  onCloseModal() {
    this.isEditModalOpen = false;
  }

  openEditModal(product: Product) {
    this.selectedProduct = product;
    this.isEditModalOpen = true;
  }
}
