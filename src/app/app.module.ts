import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TooltipModule} from "ngx-bs-tooltip";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
