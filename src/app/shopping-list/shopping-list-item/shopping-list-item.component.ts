import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list-service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() listItem: any;
  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  getActualPrice(listItem: any) {
    this.shoppingListService.getDiscountedPrice(listItem);
  }

  generateCartCount(listItem: any) {
    if (listItem.qty > 0) {
      this.shoppingListService.addQtyService(listItem);
    }
  }

}
