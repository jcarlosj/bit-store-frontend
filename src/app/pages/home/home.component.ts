import { Component } from '@angular/core';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductsHeaderComponent,
    ProductsFilterComponent,
    ProductCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
