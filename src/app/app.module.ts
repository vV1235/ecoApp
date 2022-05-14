import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule  } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import { StatsComponent } from './stats/stats.component';
import { MapsComponent } from './maps/maps.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    NewsComponent,
    StatsComponent,
    MapsComponent,
    SearchEngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
