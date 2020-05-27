import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ShoppingContentComponent } from './shopping-content/shopping-content.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'shop-list', component: ShoppingContentComponent},
            {path: '', redirectTo: 'shop-list', pathMatch: 'full'},
            {path: 'cart-details', component: CartDetailsComponent}
          ]),
    ],
    exports: [RouterModule],
})

export class AppRoutingModule {}
