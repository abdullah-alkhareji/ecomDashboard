import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/ui/data-table/data-table.component';
import { createColumns } from './columns';
import { ProductsService } from '../../services/products.service';
import { AsyncPipe } from '@angular/common';
import { Product, ProductForm } from '../../../data/products';
import { ProductsTableComponent } from '../../components/products-table/products-table.component';
import { ModalComponent } from '../../components/ui/modal/modal.component';
import { AddProductFormComponent } from '../../components/add-product-form/add-product-form.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    AsyncPipe,
    ProductsTableComponent,
    ModalComponent,
    AddProductFormComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  isModalOpen = false;

  constructor(private productsService: ProductsService) {}
  products = this.productsService.products$;
  columns = createColumns(this.productsService);

  deleteProduct = (product: Product) => {
    this.productsService.deleteProduct(product.id);
  };

  editProduct(id: number) {
    // this.productsService.editProduct(id);
  }

  onCloseModal() {
    this.isModalOpen = false;
  }

  onOpenModal() {
    this.isModalOpen = true;
  }

  addProduct(product: ProductForm) {
    this.productsService.addProduct(product);
    this.isModalOpen = false;
  }
}
