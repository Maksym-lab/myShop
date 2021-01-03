import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() price: number;
  @Input() category: string;
  constructor() { }
  ngOnInit() {
  }
}
