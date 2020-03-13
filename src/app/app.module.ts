import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CardComponent } from './card/card.component';
import { ListCardComponent } from './list-card/list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
