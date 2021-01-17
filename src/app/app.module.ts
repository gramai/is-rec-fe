import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CriteriaElementComponent } from './criteria-element/criteria-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CriteriaElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
