import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
@Input() data :any
  constructor() {
    console.log(this.data ,'constructor')
   }

  ngOnInit(): void {
    console.log(this.data,'ngOnInit')
  }
  ngOnChanges(): void {
    console.log(this.data,'ngOnChanges')
  }

}
