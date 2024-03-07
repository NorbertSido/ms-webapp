import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  LIST_URL: string = 'http://localhost:5051/products';
  getData() {
    return this.http.get<any>(this.LIST_URL)
      .pipe(
        map((res) => {
          let list: Product[] = [];

          for (let i = 0; i < res.length; i++){
            let product = new Product(
              res[i].id,
              res[i].name,
              res[i].price,
            )
            list.push(product)
          }
          return list;
        })
      )
  }

  ADD_URL: string = 'http://localhost:5051/products/create';
  createProduct(newProduct: Product) {
    let postedHeaders = { "content-type": "application/json"}
    let postedObject = {
      name: newProduct.name,
      price: newProduct.price
    }
    return this.http.post(this.ADD_URL, JSON.stringify(postedObject), { headers: postedHeaders });
  }

  DELETE_URL: string = 'http://localhost:5051/products/delete/'
  deleteProduct(productToDelete: Product) {
    let deleteURL = this.DELETE_URL + productToDelete.id;

    return this.http.delete(deleteURL)
      .pipe(map((res: any) => {
        if (res.status === 200) {
          return true
        }
        else return false
      }))
  }
}