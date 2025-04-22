import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/ui/data-table/data-table.component';
import { createColumns } from './columns';
import { ProductsService } from '../../services/products.service';
import { AsyncPipe } from '@angular/common';
import { Product } from '../../../data/products';
import { ProductsTableComponent } from "../../components/products-table/products-table.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, ProductsTableComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(private productsService: ProductsService) {}
  products = this.productsService.products$;
  columns = createColumns(this.productsService);

  deleteProduct = (product: Product) => {
    this.productsService.deleteProduct(product.id);
  };

  editProduct(id: number) {
    // this.productsService.editProduct(id);
  }
}
