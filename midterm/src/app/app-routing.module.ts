import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepComponent } from './components/homep/homep.component';
import { FeedComponent } from './components/feed/feed.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


const routes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'home', component: HomepComponent},
  {path: 'aboutus', component: AboutUsComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
