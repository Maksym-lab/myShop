import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders/orders.service';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  msg="Waiting...";
  longMsg="We are processing your order!!"
  constructor(private orderService: OrdersService) { 
  }
  ngOnInit() {
    this.orderService.checkout();   
    this.msg="Done!" 
    this.longMsg="Check up your orders to get whatever."
  }
}
