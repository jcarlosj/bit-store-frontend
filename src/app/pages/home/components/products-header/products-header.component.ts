import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  sortOrder: SortOrder = SortOrder.Desc; 

  onSortChange( event: any ) {
    this.sortOrder = event.target.value;
  }
}
