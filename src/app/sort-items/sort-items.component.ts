import { Component } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Component({
  selector: 'app-sort-items',
  templateUrl: './sort-items.component.html',
  styleUrls: ['./sort-items.component.css']
})
export class SortItemsComponent {

  constructor(public shoppingListService: ShoppingListService) { }

  public generateHighPricedItems() {
    this.shoppingListService.sortedHighPriceService();
  }
  public generateLowPricedItems() {
    this.shoppingListService.sortedLowPriceService();
  }
  public generateDiscountPricedItems() {
    this.shoppingListService.sortedDiscountItemsService();
  }

}
