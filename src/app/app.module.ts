import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Imported syncfusion InPlaceEditorAllModule from ej2-angular-inplace-editor package
import { InPlaceEditorAllModule } from '@syncfusion/ej2-angular-inplace-editor';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, InPlaceEditorAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
