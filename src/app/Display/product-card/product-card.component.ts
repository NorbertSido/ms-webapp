import { Component, Input } from '@angular/core';
import { Product } from '../../Service/product';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input('product')
  product?: Product;
  error?: boolean;

  constructor(private service: ProductService) { }

  deleteProduct() {
    if (this.product) {
      this.service.deleteProduct(this.product)
        .subscribe({
          next: (success) => {
            if (!success) this.error = true;
            else this.error = false;
          },
          error: (error) => { this.error = true}
        })
    }
  }
}
