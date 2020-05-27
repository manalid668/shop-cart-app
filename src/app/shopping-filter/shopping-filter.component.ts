import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Options } from 'ng5-slider';
import { GlobalConstants } from '../common/global.constant';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Component({
  selector: 'app-shopping-filter',
  templateUrl: './shopping-filter.component.html',
  styleUrls: ['./shopping-filter.component.css']
})
export class ShoppingFilterComponent implements OnInit {

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
  public isMobileWeb = false;
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
