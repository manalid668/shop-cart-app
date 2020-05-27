import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalConstants } from '../common/global.constant';
import { MobileFilterComponent } from '../mobile-filter/mobile-filter.component';
import { ShoppingListService } from '../shopping-list/shopping-list-service';
import { SortItemsComponent } from '../sort-items/sort-items.component';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {
  public isMobileView = false;
  constructor(public shoppingListService: ShoppingListService,
              public dialog: MatDialog) {
        this.getDeviceType();
   }
   public getDeviceType() {
    // this.isMobileView = this.shoppingListService.checkDeviceType();
    this.isMobileView = GlobalConstants.isMobileView;
  }
  public generateHighPricedItems() {
    this.shoppingListService.sortedHighPriceService();
  }
  public generateLowPricedItems() {
    this.shoppingListService.sortedLowPriceService();
  }
  public generateDiscountPricedItems() {
    this.shoppingListService.sortedDiscountItemsService();
  }
  public getSortOptions() {
    const dialogRef = this.dialog.open(SortItemsComponent, {
      width: '250px',
      data: {}
    });
  }
  public getFilterOptions() {
    const dialogRef = this.dialog.open(MobileFilterComponent, {
      width: '250px',
      data: {}
    });
  }
}

