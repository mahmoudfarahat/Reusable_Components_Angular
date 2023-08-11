import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

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
