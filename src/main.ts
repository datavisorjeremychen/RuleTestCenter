import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';

import { TestingModule } from './app/testing/testing.module';
import { TestingCenterComponent } from './app/testing/components/testing-center/testing-center.component';

const routes: Routes = [
  { path: 'testing', component: TestingCenterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'testing' },
  { path: '**', redirectTo: 'testing' }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(TestingModule),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));