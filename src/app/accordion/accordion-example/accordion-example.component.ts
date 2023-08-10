import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-example',
  templateUrl: './accordion-example.component.html',
  styleUrls: ['./accordion-example.component.css']
})
export class AccordionExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = [
    {title:'Why is the sky blue', content:'the sky is blue because it is'},
    {title:'what does an orange taste', content:'orange taste sweet'},
    {title:'what color is that cat', content:'an orange an animal'}

  ]
}
