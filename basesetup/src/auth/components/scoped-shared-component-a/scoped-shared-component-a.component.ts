import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoped-shared-component-a',
  templateUrl: './scoped-shared-component-a.component.html',
  styleUrls: ['./scoped-shared-component-a.component.scss']
})
export class ScopedSharedComponentAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
