import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterARoutingModule } from './master-a-routing.module';
import { ScopedSharedComponentAComponent } from './scoped-shared-component-a/scoped-shared-component-a.component';
import { ScopedSharedComponentBComponent } from './scoped-shared-component-b/scoped-shared-component-b.component';


@NgModule({
  declarations: [
    ScopedSharedComponentAComponent,
    ScopedSharedComponentBComponent
  ],
  imports: [
    CommonModule,
    MasterARoutingModule
  ]
})
export class MasterAModule { }
