import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './component/table/table.component';
import { PhotoComponent } from './component/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
