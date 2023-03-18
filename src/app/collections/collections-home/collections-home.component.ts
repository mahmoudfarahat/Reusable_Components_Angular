import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
data = [
  {name:'James', age:24 , job:'Designer' , employed:true},
  {name:'Jill', age:21 , job:'Engineer' , employed:false},
  {name:'Mahmoud', age:25 , job:'Designer', employed:true},
  {name:'Jill', age:21 , job:'Engineer' , employed:false},
  {name:'Mahmoud', age:25 , job:'Designer', employed:true},
  {name:'James', age:24 , job:'Designer' , employed:true},
  {name:'Mahmoud', age:25 , job:'Designer', employed:true},
]

headers =[
  {key : 'name', label:'Name'},
  {key : 'age', label:'Age'},
  {key : 'job', label:'Job'},


]

  constructor() { }

  ngOnInit(): void {
  }

}
