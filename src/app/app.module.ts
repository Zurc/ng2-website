import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { LandingPageComponent } from './components/pages/landing-page.component';
import { ResponsiveWebAppsComponent } from './components/pages/responsive-web-apps.component';
import { AhoComponent } from './components/pages/aho.component';
import { CjFineArtsComponent } from './components/pages/cj-fine-arts.component';
import { TeranFriasComponent } from './components/pages/teran-frias.component';
import { SeveralWebsitesComponent } from './components/pages/several-websites.component';
import { ConstructComponent } from './components/pages/construct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    HomeComponent,
    AboutComponent,
    ResponsiveWebAppsComponent,
    LandingPageComponent,
    AhoComponent,
    CjFineArtsComponent,
    TeranFriasComponent,
    SeveralWebsitesComponent,
    ConstructComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
