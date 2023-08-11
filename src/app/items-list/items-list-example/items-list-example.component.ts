import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list-example',
  templateUrl: './items-list-example.component.html',
  styleUrls: ['./items-list-example.component.css']
})
export class ItemsListExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    { image:'/assets/images/couch.jpeg',title:'Couch', description:'This is a fantastic couch to sit on'  },
    { image:'/assets/images/dresser.jpeg',title:'Dresser', description:'This is a fantastic dresser to sit on'  }
  ]
}
