import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { MediaChange, ObservableMedia } from '@angular/flex-layout';

import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { MapsComponent } from './maps/maps.component';
import { StatsComponent } from './stats/stats.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'news', component: NewsComponent },
  { path: 'search-engine', component: SearchEngineComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'stats', component: StatsComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
