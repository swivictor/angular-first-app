/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// Rutes
import {provideRouter} from '@angular/router'
import routeConfig from './app/routes';

bootstrapApplication(AppComponent,
    {providers: [
      provideRouter(routeConfig),
      provideProtractorTestingSupport()]})
  .catch(err => console.error(err));
