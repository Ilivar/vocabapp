import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "vocabapp-c42ef", appId: "1:405151128190:web:d075ffac309e8c9534d62f", storageBucket: "vocabapp-c42ef.firebasestorage.app", apiKey: "AIzaSyBbTk9PamX5N0iCpzxDpBG3L_6yymLDfLk", authDomain: "vocabapp-c42ef.firebaseapp.com", messagingSenderId: "405151128190" })), provideFirestore(() => getFirestore())
  ]
};
