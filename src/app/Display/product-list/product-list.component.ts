import { Component } from '@angular/core';
import { Product } from '../../Service/product';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  data: Product[] = [];

  constructor(private service: ProductService) {}
}
