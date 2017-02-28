import { FilterComponent } from './components/pages/filter.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { CjFineArtsComponent } from './components/pages/cj-fine-arts.component';
import { AhoComponent } from './components/pages/aho.component';
import { LandingPageComponent } from './components/pages/landing-page.component';
import { ResponsiveWebAppsComponent } from './components/pages/responsive-web-apps.component';
import { TeranFriasComponent } from './components/pages/teran-frias.component';
import { SeveralWebsitesComponent } from './components/pages/several-websites.component';
import { ConstructComponent } from './components/pages/construct.component';
import { RavnWebComponent } from './components/pages/ravn-web.component';

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
  {
    path: 'teran-frias',
    component: TeranFriasComponent
  },
  {
    path: 'several-websites',
    component: SeveralWebsitesComponent
  },
  {
    path: 'construct',
    component: ConstructComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'ravn-web',
    component: RavnWebComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
