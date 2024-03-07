import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../Service/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit, OnDestroy {
  editProductForm: FormGroup;
  product?: Product;

  constructor(private activatedRoute: ActivatedRoute, private service: ProductService) {
    this.editProductForm = new FormGroup({
      productName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      productPrice: new FormControl('', [Validators.required, Validators.min(100), Validators.max(10000)])
    })
  }

  get productName() { return this.editProductForm.get('productName') };
  get productPrice() { return this.editProductForm.get('productPrice') };

  onSubmit() {}

  ngOnDestroy(): void { }
  
  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   let productId = Number(params.get('id'));
    //   this.service
    //     .getProductById(productId)
    //     .subscribe({
    //       next: (data: Product) => { this.product = data;
    //         this.editProductForm.controls['productName'].setValue(this.product.name);
    //         this.editProductForm.controls['productPrice'].setValue(this.product.price);
    //       }
    //     })
    // })
  }

}
