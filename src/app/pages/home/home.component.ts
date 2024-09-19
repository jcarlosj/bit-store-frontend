import { Component } from '@angular/core';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductsHeaderComponent,
    ProductsFilterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
