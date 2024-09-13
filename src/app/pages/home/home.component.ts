import { Component } from '@angular/core';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductsHeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
