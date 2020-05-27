import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GlobalConstants } from '../common/global.constant';
import { ShoppingItem } from './shopping-item.model';
import { ShoppingListService } from './shopping-list-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public shoppingListItems: ShoppingItem[] = [];
  public isMobileWeb = false;

  constructor(public shoppingListService: ShoppingListService,
              public dialog: MatDialog, public route: ActivatedRoute) {
      this.getDeviceType();
    }

    public getDeviceType() {
      this.isMobileWeb = GlobalConstants.isMobileView;
    }

  ngOnInit() {
    this.initialPageMaker();
  }

  public initialPageMaker() {
    this.shoppingListService.getItems();
    this.shoppingListService.displayDtls.subscribe(data => {
      if (data) {
          this.shoppingListItems = data;
      }
    });
  }

}
