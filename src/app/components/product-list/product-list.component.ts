import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      sku: '',
      name: 'IPhone 15',
      description: 'THis is the best IPhone in the world',
      unitPrice: 1,
      imageUrl: 'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074007364625/231108150046076891.png@webp',
      active: true,
      unitsInstack: 100,
      dateCreated: new Date(),
      lastUpdated: new Date(),
    },
    {
      sku: '',
      name: 'IPhone 15',
      description: 'THis is the best IPhone in the world',
      unitPrice: 1,
      imageUrl: 'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074007364625/231108150046076891.png@webp',
      active: true,
      unitsInstack: 100,
      dateCreated: new Date(),
      lastUpdated: new Date(),
    },
    {
      sku: '',
      name: 'IPhone 15',
      description: 'THis is the best IPhone in the world',
      unitPrice: 1,
      imageUrl: 'https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074007364625/231108150046076891.png@webp',
      active: true,
      unitsInstack: 100,
      dateCreated: new Date(),
      lastUpdated: new Date(),
    }
  ];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    });
  }
}
