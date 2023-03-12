import { IProduct } from './../../models/IProduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  productDetails: IProduct | null = null;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe({
      next: (response) => (this.productDetails = response)
    });
  }

}
