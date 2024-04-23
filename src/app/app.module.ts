import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { ZooTableComponent } from './zoo-table/zoo-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ZooTableComponent,
  ],
  imports: [
    BrowserModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }