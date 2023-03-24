import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutPowerBiComponent } from './components/about-power-bi/about-power-bi.component';

const routes: Routes = [
  // { path: 'home', component: AppComponent },
  // { path: 'about-powerbi', component: AboutPowerBiComponent },
  // { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
