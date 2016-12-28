import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	RouterModule.forRoot([
		{
		    path: 'heroes',
		    component: HeroesComponent
		},
		{
			path: 'dashboard',
		 	component: DashboardComponent
		},
		{
		  	path: '',
		 	redirectTo: '/dashboard',
		  	pathMatch: 'full'
		},
		{
		  path: 'detail/:id',
		  component: HeroDetailComponent
		},
	])
  ],
  declarations: [ 
  	AppComponent,
  	HeroDetailComponent,
  	HeroesComponent,
  	DashboardComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService],
})



export class AppModule { 

}
