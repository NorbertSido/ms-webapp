import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../Service/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  addProductForm: FormGroup;
  infoMessage?: string;
  errorMessage?: string

  constructor(private service: ProductService) {
    this.addProductForm = new FormGroup({
      productName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      productPrice: new FormControl('', [Validators.required, Validators.min(100), Validators.max(10000)])
    });
  }

  get productName() { return this.addProductForm.get('productName') };
  get productPrice() { return this.addProductForm.get('productPrice') };

  onSubmit() {
    let newProduct = new Product(
      -1,
      this.addProductForm.value.productName,
      this.addProductForm.value.productPrice
    );

    this.service.createProduct(newProduct)
      .subscribe({
        next: (res: any) => {
          if (res.status === 201) {
            this.infoMessage = 'Sikeres feltöltés!'
            this.addProductForm.reset();
          }
        },
        error: (error) => {
          this.errorMessage = 'Sikertelen feltöltés!'
        }
      })
  }
}
