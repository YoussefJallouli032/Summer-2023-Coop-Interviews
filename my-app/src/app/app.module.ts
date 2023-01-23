import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogImageComponent } from './dog-image/dog-image.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingHistoryComponent } from './rating-history/rating-history.component';
@NgModule({
  declarations: [
    AppComponent,
    DogImageComponent,
    RatingHistoryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
