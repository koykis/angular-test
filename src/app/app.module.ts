import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import { ChartComponent }  from './components/chart.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing,
		ChartModule.forRoot(require('highcharts'))
	],
  declarations: [ AppComponent, UserComponent, AboutComponent, ChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
