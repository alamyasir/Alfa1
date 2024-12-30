import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { DialogService } from 'primeng/dynamicdialog';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import MyPreset from './mypreset';


export const appConfig: ApplicationConfig = {
  providers: [DialogService,
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        // preset: Aura,
        preset: MyPreset

      }
    })
  ]
};