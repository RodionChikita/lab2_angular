import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxPopupModule, DxSelectBoxModule,
  DxTextBoxModule
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { ZooTableComponent } from './zoo-table/zoo-table.component';
import { AddAndEditModalComponent } from './add-and-edit-modal/add-and-edit-modal.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ZooTableComponent,
    AddAndEditModalComponent,
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxCheckBoxModule,
    ReactiveFormsModule,
    DxTextBoxModule,
    DxButtonModule,
    DxPopupModule,
    DxDateBoxModule,
    DxSelectBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
