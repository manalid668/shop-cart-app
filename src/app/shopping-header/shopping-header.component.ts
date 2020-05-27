import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../common/global.constant';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Component({
  selector: 'app-shopping-header',
  templateUrl: './shopping-header.component.html',
  styleUrls: ['./shopping-header.component.css']
})
export class ShoppingHeaderComponent implements OnInit, DoCheck {
  @Input() isXsDev: boolean;
  public cartQty = 0;
  public cartDtls: any[] = [];
  public searchText: string;
  constructor(public shoppingListService: ShoppingListService,
              private router: Router) { }
  ngOnInit(): void {
    this.shoppingListService.dispCartCount.subscribe(data => {
        if (data) {
            this.cartQty = data;
        } else {
            this.cartQty = 0;
        }
    });
  }
  ngDoCheck(): void {
    this.shoppingListService.dispCartCount.subscribe(data => {
        if (data) {
            this.cartQty = data;
        } else {
            this.cartQty = 0;
        }
    });
  }
  public generateCartDetails() {
    GlobalConstants.isCartDetailsAvailable = true;
    this.router.navigate(['/cart-details']);
  }
  public gotoHome() {
    GlobalConstants.isCartDetailsAvailable = false;
    this.router.navigate(['/shop-list']);
  }
  public generateSearch() {
    if (this.searchText.length >= 3) {
      this.shoppingListService.searchService(this.searchText);
    } else if (this.searchText.length === 0) {
      this.shoppingListService.getItems();
    }
  }
}

