import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ScopedSharedComponentAComponent } from './components/scoped-shared-component-a/scoped-shared-component-a.component';
import { ScopedSharedComponentBComponent } from './components/scoped-shared-component-b/scoped-shared-component-b.component';


@NgModule({
  declarations: [
    AuthComponent,
    ScopedSharedComponentAComponent,
    ScopedSharedComponentBComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
