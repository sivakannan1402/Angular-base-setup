import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesARoutingModule } from './pages-a-routing.module';
import { PagesAComponent } from './pages-a.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';


@NgModule({
  declarations: [
    PagesAComponent,
    PageAComponent,
    PageBComponent
  ],
  imports: [
    CommonModule,
    PagesARoutingModule
  ]
})
export class PagesAModule { }
