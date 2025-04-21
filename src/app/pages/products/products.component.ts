import { Component } from '@angular/core';
import { DataTableComponent } from '../../components/ui/data-table/data-table.component';
import { createColumns } from './columns';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private productsService: ProductsService) {}
  products = this.productsService.getProducts();
  columns = createColumns(this.productsService);

}
