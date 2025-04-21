import { Injectable, signal } from '@angular/core';
import { Product, PRODUCTS } from '../../data/products';
import { UsersService } from './users.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private usersService: UsersService) {}

  private _products = signal<Product[]>(PRODUCTS);
  products$ = toObservable(this._products);

  getProducts() {
    return this._products();
  }

  getProduct(id: number) {
    return this._products().find((product) => product.id === id);
  }

  getProductName(id: number) {
    return this._products().find((product) => product.id === id)?.name;
  }

  getProductDescription(id: number) {
    return this._products().find((product) => product.id === id)?.description;
  }

  getProductPrice(id: number) {
    return this._products().find((product) => product.id === id)?.price;
  }

  getProductCategory(id: number) {
    return this._products().find((product) => product.id === id)?.category;
  }

  getProductStock(id: number) {
    return this._products().find((product) => product.id === id)?.stock;
  }

  getProductStatus(id: number) {
    return this._products().find((product) => product.id === id)?.status;
  }

  getProductRating(id: number) {
    return this._products().find((product) => product.id === id)?.rating;
  }

  getProductImageUrl(id: number) {
    return this._products().find((product) => product.id === id)?.imageUrl;
  }

  getProductCreatedAt(id: number) {
    return this._products().find((product) => product.id === id)?.createdAt;
  }

  getProductUpdatedAt(id: number) {
    return this._products().find((product) => product.id === id)?.updatedAt;
  }

  getProductTags(id: number) {
    return this._products().find((product) => product.id === id)?.tags;
  }

  createProduct(product: Product) {
    this._products.update((products) => [...products, product]);
  }

  updateProduct(id: number, product: Product) {
    this._products.update((products) =>
      products.map((p) => (p.id === id ? product : p))
    );
  }

  deleteProduct(id: number) {
    this._products.update((products) => products.filter((p) => p.id !== id));
  }

  getProductUser(id: number) {
    return this.usersService.getUser(id);
  }
}
