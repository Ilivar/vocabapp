import { inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { VocabularyInterface } from './vocabulary-interface';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  firestore: Firestore = inject(Firestore);
  unsubscribe;
  VocabularyList: VocabularyInterface[] = [];

  constructor() {
    this.unsubscribe = onSnapshot(
      collection(this.firestore, 'Vocabulary'),
      (data) => {
         this.VocabularyList = [];
        data.forEach((doc) => {
          console.log(doc.data());
          this.VocabularyList.push(
            this.setVocabularyObject(doc.id, doc.data() as VocabularyInterface)
          );
        });
      }
    );
  }

  async addVocabularyToDatabase(Vocabulary: VocabularyInterface) {
    await addDoc(collection(this.firestore, 'Vocabulary'), Vocabulary);
  }

  setVocabularyObject(
    id: string,
    obj: VocabularyInterface
  ): VocabularyInterface {
    return {
      id: id,
      english: obj.english,
      german: obj.german,
    };
  }
}
