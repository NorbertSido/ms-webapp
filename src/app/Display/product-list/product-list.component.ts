import { Component } from '@angular/core';
import { Product } from '../../Service/product';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  data: Product[] = [
    new Product(1, "Apple", 50),
    new Product(2, "Banana", 30),
    new Product(3, "Orange", 40),
    new Product(4, "Mango", 60),
    new Product(5, "Grapes", 20),
    new  Product(6, "Watermelon" ,70),
    new Product(7, "Pineapple", 80),
    new Product(8, "Strawberry", 90),
    new Product(9, "Blueberry", 10),
    new Product(10, "Raspberry", 15),
    new Product(11, "Kiwi", 12),
    new Product(12, "Avocado", 18),
    new Product(13, "Cherry", 25),
    new Product(14, "Plum", 35),
    new Product(15, "Multiple Fruits", 60),
    new Product(16, "Apple", 80),
    new Product(17, "Banana", 90)
  ];

  constructor(private service: ProductService) {}
}
