import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'update-cart',
  templateUrl: './update-cart.component.html',
  styleUrls: ['./update-cart.component.css']
})
export class UpdateCartComponent implements OnInit {
  @Input() quantity = 0;
  constructor() {     
  }
  ngOnInit(){ 
  }
}
