import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product: Product

  constructor(private productService: ProductService,
              private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      this.getProduct()
  }
  getProduct() {
    const productId = this.route.snapshot.paramMap.get("id")

    this.productService.getProduct(+productId).subscribe({
      next: (response) => {
        this.product = response
      },
      error: (error) => {
        console.log("Error fetching product ",error)
      }
    })
  }
}
