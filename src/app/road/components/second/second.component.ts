import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-component',
  template: `
    <p>Second component</p>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
