import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firebase } from './firebase';
import { VocabularyList } from './vocabulary/vocabulary-list/vocabulary-list';
import { AddVocabulary } from './vocabulary/add-vocabulary/add-vocabulary';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,VocabularyList, AddVocabulary],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'vocabapp';
  firebase = inject(Firebase)
}
