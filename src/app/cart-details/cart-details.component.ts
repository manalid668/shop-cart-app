import { Component, DoCheck, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit, DoCheck {

  public cartDtls: any[] = [];
  public paymentDetails: any;
  public totalPayableAmount = 0;
  public discountedPrice = 0;
  public cartCount = 0;
  constructor(public shoppingListService: ShoppingListService) { }
  ngOnInit() {
    this.initialPageMaker();
  }
  ngDoCheck(): void {
    this.initialPageMaker();
  }
  public initialPageMaker() {
    this.shoppingListService.dispCartDetails.subscribe( data => {
      if (data) {
          this.cartDtls = data;
      }
    });
    this.shoppingListService.dispPayDetails.subscribe ( data => {
      if (data) {
        this.paymentDetails = data;
      }
    });
    this.shoppingListService.dispTotalAmount.subscribe ( data => {
      if (data) {
        this.totalPayableAmount = data;
      } else if (!data) {
        this.totalPayableAmount = 0;
      }
    });
    this.shoppingListService.dispDiscountedPrice.subscribe ( data => {
      if (data) {
        this.discountedPrice = data;
      } else if (!data) {
        this.discountedPrice = 0;
      }
    });
    this.shoppingListService.dispCartCount.subscribe ( data => {
      if (data) {
        this.cartCount = data;
      }
    });
  }

}
