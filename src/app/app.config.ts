import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'crud-auth-adb7a',
        appId: '1:368944034448:web:44f148d61a112c25e19e15',
        storageBucket: 'crud-auth-adb7a.appspot.com',
        apiKey: 'AIzaSyDRI7hBCOm5CSS5hKg25BfvilO8ULDt9_M',
        authDomain: 'crud-auth-adb7a.firebaseapp.com',
        messagingSenderId: '368944034448',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
