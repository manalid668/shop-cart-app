import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { GlobalConstants } from '../app/common/global.constant';
import { ShoppingListService } from './shopping-list/shopping-list-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit, OnDestroy{
  title = 'AddToCartApplication';
  isCartAvailable = false;
  isMobileWeb = false;
  mediaSub: Subscription;
  constructor(public shoppingListService: ShoppingListService, public mediaObserver: MediaObserver) {
    // this.initApp();
  }
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      this.isMobileWeb = result.mqAlias === 'xs' ? true : false;
      GlobalConstants.isMobileView = this.isMobileWeb;
      console.log('is Mobile ', this.isMobileWeb);
    });
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
  ngDoCheck() {
    this.isCartAvailable = GlobalConstants.isCartDetailsAvailable;
  }
  // public initApp() {
  //   this.isMobileWeb = this.shoppingListService.checkDeviceType();
  //   GlobalConstants.isMobileView = this.isMobileWeb;
  // }
}
