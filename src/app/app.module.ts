import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './common/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
       path:"",
       component:C1Component
      },
      {
        path:"c2",
        component:C2Component
      },
      {
        path:"c3",
        component:C3Component
      }
    ]),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
