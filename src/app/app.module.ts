import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicsComponent } from './components/pics/pics.component';
import { PlaceyourorderComponent } from './components/placeyourorder/placeyourorder.component';


@NgModule({
  declarations: [
    AppComponent,
    PicsComponent,
    PlaceyourorderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
