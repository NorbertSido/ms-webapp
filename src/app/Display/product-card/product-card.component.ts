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

  constructor(private service: ProductService) { }
}
