import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

enum ShowNumber {
  Nine = 9,
  Twelve = 12,
  Fifteen = 15,
  Eighteen = 18,
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
  showNumber: Number = ShowNumber.Twelve;

  onSortChange( event: any ) {
    this.sortOrder = event.target.value;
  }

  onShowChange( event: any ) {
    this.showNumber = event.target.value;
  }
  
}
