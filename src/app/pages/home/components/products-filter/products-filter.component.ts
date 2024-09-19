import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-filter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.css'
})
export class ProductsFilterComponent {
  public categories = [ 'fruits', 'vegetables' ];
  public showCategory: string;

  constructor() {
    this.showCategory = 'all';    // Set the default value to 'all'
  }

  public onCategoryChange( event: any ): void {
    this.showCategory = event.target.value;
  }
}
