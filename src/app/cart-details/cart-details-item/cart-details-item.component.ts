import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list-service';

@Component({
  selector: 'app-cart-details-item',
  templateUrl: './cart-details-item.component.html',
  styleUrls: ['./cart-details-item.component.css']
})
export class CartDetailsItemComponent implements OnInit {

  @Input() cartItem: any;
  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  public generateQtyIncrement(cartItem) {
    if (cartItem.qty > 0) {
      this.shoppingListService.addQtyService(cartItem);
    }
  }

  public generateQtyDecrement(cartItem) {
    if (cartItem.qtyUsed > 0) {
      this.shoppingListService.subQtyService(cartItem);
    }
  }

  public generateRemoveService(cartItem) {
      this.shoppingListService.removeService(cartItem);
  }

}
