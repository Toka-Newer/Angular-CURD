import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response)=> (this.products = response)
    });
  }
  delete(productId: number): void {
    this.productService.deleteProduct(productId).subscribe({
      next: ()=> {
        this.products = this.products.filter((product)=>(product.id != productId))
      }
    });
  }
}
