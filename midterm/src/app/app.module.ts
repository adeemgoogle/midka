import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepComponent } from './components/homep/homep.component';
import { FeedComponent } from './components/feed/feed.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { HoverHighlightDirective } from './hover-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HoverHighlightDirective ,
    HomepComponent,
    FeedComponent,
    AboutUsComponent,
    HoverHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
