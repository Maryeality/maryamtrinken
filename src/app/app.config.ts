import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"maryamtrinken","appId":"1:88302657392:web:27052f894e03e8669b39b5","storageBucket":"maryamtrinken.appspot.com","apiKey":"AIzaSyDOBiLTv2uEQ75eYOyIaoT23LzTODTX3-A","authDomain":"maryamtrinken.firebaseapp.com","messagingSenderId":"88302657392"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
