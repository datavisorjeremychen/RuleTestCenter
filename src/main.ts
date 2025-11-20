import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, Router } from '@angular/router';
import { AppComponent } from './app/app.component';
import { TestingCenterComponent } from './app/testing/components/testing-center/testing-center.component';

const routes: Routes = [
  { path: 'testing', component: TestingCenterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'testing' },
  { path: '**', redirectTo: 'testing' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(ref => {
  const router = ref.injector.get(Router);
  router.navigateByUrl('/testing');
});