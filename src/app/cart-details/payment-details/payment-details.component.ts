import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list-service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  public paymentDetails: any[] = [];
  constructor(public shoppingListService: ShoppingListService) { }
  @Input() payItem: any;
  ngOnInit(): void {
  }

}
