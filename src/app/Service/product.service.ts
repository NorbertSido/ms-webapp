import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  LIST_URL: string = '';
  getData() {
    return this.http.get<any>(this.LIST_URL)
      .pipe(
        map((res) => {
          if (res.status != 200) throw new Error('Hiba a getData függvényhíváskor');
          let list: Product[] = [];

          for (let i = 0; i < res.data.length; i++){
            let product = new Product(
              res.data[i].id,
              res.data[i].name,
              res.data[i].price,
            )
            list.push(product)
          }
          return list;
        })
      )
  }
}
