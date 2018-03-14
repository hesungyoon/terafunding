import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import component
import { HeroComponent } from '../hero/hero.component';

// 라우트 구성
const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  }
];
@NgModule({
  // configure with the routes
  // forRoot() supplies the service providers and directives
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
