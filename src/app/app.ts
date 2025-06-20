import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firebase } from './firebase';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'vocabapp';
  firebase = inject(Firebase)
}
