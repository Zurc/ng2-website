import { ResponsiveWebAppsComponent } from './components/pages/responsive-web-apps';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);