import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import configuration from './customization-theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: configuration
      }
    }),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient()
  ]
};
