export const APP_CONFIG_CODE: string = `
  export const appConfig: ApplicationConfig = {
    providers: [
      provideExperimentalZonelessChangeDetection(),
      // ...resto de configuraciones,
    ],
};`.trim();

export const APP_CONFIG_CODE_IMPORT: string = `
import { provideExperimentalZonelessChangeDetection } from '@angular/core';`.trim();
