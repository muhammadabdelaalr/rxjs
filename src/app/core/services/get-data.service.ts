import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe, shareReplay } from 'rxjs';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
      map(
        res => {
          console.log('aaaa');
          return res
        }
      ), shareReplay()
    );
  }

}
