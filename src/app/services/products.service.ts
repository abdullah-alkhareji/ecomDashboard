import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from '../../data/products';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private usersService: UsersService) {}

  products = PRODUCTS;

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }

  getProductName(id: number) {
    return this.products.find((product) => product.id === id)?.name;
  }

  getProductDescription(id: number) {
    return this.products.find((product) => product.id === id)?.description;
  }

  getProductPrice(id: number) {
    return this.products.find((product) => product.id === id)?.price;
  }

  getProductCategory(id: number) {
    return this.products.find((product) => product.id === id)?.category;
  }

  getProductStock(id: number) {
    return this.products.find((product) => product.id === id)?.stock;
  }

  getProductStatus(id: number) {
    return this.products.find((product) => product.id === id)?.status;
  }

  getProductRating(id: number) {
    return this.products.find((product) => product.id === id)?.rating;
  }

  getProductImageUrl(id: number) {
    return this.products.find((product) => product.id === id)?.imageUrl;
  }

  getProductCreatedAt(id: number) {
    return this.products.find((product) => product.id === id)?.createdAt;
  }

  getProductUpdatedAt(id: number) {
    return this.products.find((product) => product.id === id)?.updatedAt;
  }

  getProductTags(id: number) {
    return this.products.find((product) => product.id === id)?.tags;
  }

  createProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(id: number, product: Product) {
    this.products[id] = product;
  }

  deleteProduct(id: number) {
    this.products.splice(id, 1);
  }

  getProductUser(id: number) {
    return this.usersService.getUser(id);
  }
}
