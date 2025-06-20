import { inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, onSnapshot } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  firestore: Firestore = inject(Firestore);
  unsubscribe;

  constructor() {
    this.unsubscribe = onSnapshot(
      collection(this.firestore, 'Vocabulary'),
      (data) => {
        data.forEach((doc) => {
          console.log(doc.data());
          // test
        });
      }
    );
  }
}
