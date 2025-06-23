import { Component, inject } from '@angular/core';
import { Firebase } from '../../firebase';

@Component({
  selector: 'app-vocabulary-list',
  imports: [],
  templateUrl: './vocabulary-list.html',
  styleUrl: './vocabulary-list.scss'
})
export class VocabularyList {
  firebaseService = inject(Firebase)
}
