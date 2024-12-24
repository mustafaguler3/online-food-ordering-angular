import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: false
})
export class ProductListComponent implements OnInit{

  products: Product[]

  constructor(private productService: ProductService){}

  ngOnInit(): void {
      this.getProducts()
  }
  getProductImage(image: string){
    return this.productService.getProductsImage(image)
  }
  getProducts(){
    this.productService.products().subscribe({
      next: (response) => {
        console.log("Response ",response)
        this.products = response
      },
      error: (error) => {
        console.log("Error ", error)
      }
    })
  }
}
