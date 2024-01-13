import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAngularComponent } from './components/about-courses/about-angular/about-angular.component';
import { AboutAzureComponent } from './components/about-courses/about-azure/about-azure.component';
import { AboutPowerBiComponent } from './components/about-courses/about-power-bi/about-power-bi.component';
import { AboutPowerappsComponent } from './components/about-courses/about-powerapps/about-powerapps.component';
import { AboutSnowflakeComponent } from './components/about-courses/about-snowflake/about-snowflake.component';
import { AboutSqlComponent } from './components/about-courses/about-sql/about-sql.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'courses', component: CoursesComponent
  },
  { path: 'events', component: EventsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-powerbi', component: AboutPowerBiComponent },
  { path: 'about-angular', component: AboutAngularComponent },
  { path: 'about-sql', component: AboutSqlComponent },
  { path: 'about-powerapps', component: AboutPowerappsComponent },
  { path: 'about-snowflake', component: AboutSnowflakeComponent },
  { path: 'about-azure', component: AboutAzureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
