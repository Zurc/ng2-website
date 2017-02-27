import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { CjFineArtsComponent } from './components/pages/cj-fine-arts.component';
import { AhoComponent } from './components/pages/aho.component';
import { LandingPageComponent } from './components/pages/landing-page.component';
import { ResponsiveWebAppsComponent } from './components/pages/responsive-web-apps.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'responsive-web-apps',
    component: ResponsiveWebAppsComponent
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'aho',
    component: AhoComponent
  },
  {
    path: 'cj-fine-arts',
    component: CjFineArtsComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);