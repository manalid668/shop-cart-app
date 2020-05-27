import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng5SliderModule } from 'ng5-slider';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CartDetailsItemComponent } from './cart-details/cart-details-item/cart-details-item.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { PaymentDetailsComponent } from './cart-details/payment-details/payment-details.component';
import { MobileFilterComponent } from './mobile-filter/mobile-filter.component';
import { CurrencyPipePipe } from './pipes/currency-pipe.pipe';
import { SearchItemComponent } from './search-item/search-item.component';
import { ShoppingContentComponent } from './shopping-content/shopping-content.component';
import { ShoppingFilterComponent } from './shopping-filter/shopping-filter.component';
import { ShoppingFooterComponent } from './shopping-footer/shopping-footer.component';
import { ShoppingHeaderComponent } from './shopping-header/shopping-header.component';
import { ApplicationStateService } from './shopping-list/application-state.service';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListService } from './shopping-list/shopping-list-service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SortItemsComponent } from './sort-items/sort-items.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingHeaderComponent,
    ShoppingFooterComponent,
    ShoppingFilterComponent,
    ShoppingListItemComponent,
    CurrencyPipePipe,
    CartDetailsComponent,
    CartDetailsItemComponent,
    PaymentDetailsComponent,
    SearchItemComponent,
    SortItemsComponent,
    MobileFilterComponent,
    ShoppingContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    Ng5SliderModule,
    MatDialogModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule
  ],
  providers: [ShoppingListService, ApplicationStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
