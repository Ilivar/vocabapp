import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Firebase } from '../../firebase';

@Component({
  selector: 'app-add-vocabulary',
  imports: [FormsModule],
  templateUrl: './add-vocabulary.html',
  styleUrl: './add-vocabulary.scss'
})
export class AddVocabulary {
Vocabulary = {
    english: '',
    german: '',
  };
  firebaseService = inject(Firebase)

  submitVocabulary(){
    console.log(this.Vocabulary);
    this.firebaseService.addVocabularyToDatabase(this.Vocabulary);
    this.clearInputFields();
  }

  clearInputFields() {
    this.Vocabulary.english = '';
    this.Vocabulary.german = '';
  }
}
