import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Options } from 'ng5-slider';
import { GlobalConstants } from '../common/global.constant';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Component({
  selector: 'app-mobile-filter',
  templateUrl: './mobile-filter.component.html',
  styleUrls: ['./mobile-filter.component.css']
})
export class MobileFilterComponent implements OnInit {

  public isMobileWeb = false;
  public startRange = 1000;
  public stopRange = 90000;
  options: Options = {
    floor: 1000,
    ceil: 90000
  };
  constructor(public shoppingListService: ShoppingListService,
              public dialog: MatDialog) {
      this.getDeviceType();
    }

  ngOnInit(): void {
  }

  public getDeviceType() {
    this.isMobileWeb = this.shoppingListService.checkDeviceType();
    GlobalConstants.isMobileView = this.isMobileWeb;
  }

  public generatePriceFilt(min, max) {
    this.shoppingListService.getFilteredItems(min, max);
  }

}
