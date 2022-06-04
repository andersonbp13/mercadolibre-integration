import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./component/home-page/home-page.component";
import {SearchResultsPageComponent} from "./component/search-results-page/search-results-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'search', component: SearchResultsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
