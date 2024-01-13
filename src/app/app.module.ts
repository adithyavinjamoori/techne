import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule, } from '@angular/material/icon';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EventsComponent } from './components/events/events.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutPowerBiComponent } from './components/about-courses/about-power-bi/about-power-bi.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { AboutAngularComponent } from './components/about-courses/about-angular/about-angular.component';
import { AboutSqlComponent } from './components/about-courses/about-sql/about-sql.component';
import { AboutPowerappsComponent } from './components/about-courses/about-powerapps/about-powerapps.component';
import { AboutDevopsComponent } from './components/about-courses/about-devops/about-devops.component';
import { AboutSnowflakeComponent } from './components/about-courses/about-snowflake/about-snowflake.component';
import { AboutAzureComponent } from './components/about-courses/about-azure/about-azure.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CoursesComponent,
    EventsComponent,
    AboutUsComponent,
    ContactUsComponent,
    AboutPowerBiComponent,
    AboutAngularComponent,
    AboutSqlComponent,
    AboutPowerappsComponent,
    AboutDevopsComponent,
    AboutSnowflakeComponent,
    AboutAzureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
