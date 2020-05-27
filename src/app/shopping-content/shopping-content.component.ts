import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global.constant';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Component({
  selector: 'app-shopping-content',
  templateUrl: './shopping-content.component.html',
  styleUrls: ['./shopping-content.component.css']
})
export class ShoppingContentComponent implements OnInit {

  isMobileWeb = false;

  constructor(public shoppingListService: ShoppingListService) {
    this.initApp();
  }

  ngOnInit(): void {
  }

  public initApp() {
    // this.isMobileWeb = this.shoppingListService.checkDeviceType();
    this.isMobileWeb = GlobalConstants.isMobileView;
  }

}
