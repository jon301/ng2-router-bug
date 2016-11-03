import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beta-component',
  template: `
    Beta component
  `,
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
