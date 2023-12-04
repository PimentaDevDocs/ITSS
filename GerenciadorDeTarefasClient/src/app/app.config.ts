import {ApplicationConfig, ApplicationModule, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {TarefasService} from "./services/tarefas.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule)
  ]
};
