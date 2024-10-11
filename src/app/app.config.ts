import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { cursorInterceptor } from '../tools/cursor.interceptor';
import { tokenInterceptor } from '../tools/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, 
      withInMemoryScrolling({scrollPositionRestoration: 'enabled'})),
    provideHttpClient( // à fournir pour être récupérable dans les services
      withInterceptors([
        cursorInterceptor,
        tokenInterceptor
      ])
    )
  ]
};
