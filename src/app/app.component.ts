import { GetDataService } from './core/services/get-data.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Product, sortProducts } from './core/interfaces/products';
import { map } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [GetDataService]
})
export class AppComponent implements OnInit {

  jeweleryProducts$!: Observable<Product[]>;

  electronicsProducts$!: Observable<Product[]>;

  constructor(private _getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    const products$: Observable<Product[]> = this._getDataService.getData().pipe(
      map(products => products.sort(sortProducts))
    );

    products$.subscribe()

    this.jeweleryProducts$ = products$.pipe(
      map( products => products.filter(product => product.category == 'jewelery'))
    )

    this.electronicsProducts$ = products$.pipe(
      map( products => products.filter(product => product.category == 'electronics'))
    )
  }
}
