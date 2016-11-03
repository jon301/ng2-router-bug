import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-component',
  template: `
    First component
  `,
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
