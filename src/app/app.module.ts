import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import {HttpClientModule} from '@angular/common/http';
import { MoviesService } from './share/themoviedb.service';
import { ExcerptPipe } from './share/pipes/excerpt.pipe';
import { HoverCardDirective } from './share/directives/hover-card.directive';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from './/app-routing.module';

import { AgmCoreModule } from '@agm/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MenuComponent,
    ContactComponent,
    FooterComponent,
    ExcerptPipe,
    HoverCardDirective,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YourAPIKey'
    }),
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
