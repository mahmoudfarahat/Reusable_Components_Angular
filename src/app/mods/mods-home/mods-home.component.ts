import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen= false

  items = [
    {title:'Why is the sky blue', content:'the sky is blue because it is'},
    {title:'what does an orange taste', content:'orange taste sweet'},
    {title:'what color is that cat', content:'an orange an animal'}

  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
   this.modalOpen = !this.modalOpen
  }
}
