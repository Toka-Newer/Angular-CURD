import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  products: any | null = null;
  productId: number = 0;

  constructor(private productService: ProductService, private router: Router, private activateRoute: ActivatedRoute) {
    this.productId = Number(this.activateRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      img: new FormControl(''),
    });
    if (this.productId != 0) {
      this.productService.getProductById(this.productId).subscribe({
        next: (response) => {
          this.products = response;
          this.productForm.controls["productName"].setValue(this.products.productName);
          this.productForm.controls["price"].setValue(this.products.price);
          this.productForm.controls["quantity"].setValue(this.products.quantity);
        }
      })
    }
  }
  save(e: any) {
    e.preventDefault()
    if (this.productForm.status == 'VALID') {
      if (this.productId == 0) {
        this.productService.addProduct(this.productForm.value).subscribe();
      } else {
        this.productService.editProduct(this.productId, this.productForm.value).subscribe();
      }
    } else {
      alert('please enter data')
    }

    this.router.navigate(['/products']);
  }

  get ProductName(){
    return this.productForm.controls['productName'];
  }

  get Price(){
    return this.productForm.controls['price'];
  }

  get Quantity(){
    return this.productForm.controls['quantity'];
  }

}
