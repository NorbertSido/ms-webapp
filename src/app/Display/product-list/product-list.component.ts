import { Component, OnInit } from '@angular/core';
import { Product } from '../../Service/product';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  data: Product[] = [];

  constructor(private service: ProductService) { }
  
  ngOnInit(): void {
    this.service.getData()
      .subscribe({
        next: (data) => {
          this.data = data;
        },
        error: (error) => console.log(`Error: ${error}`)
      })
  }
}