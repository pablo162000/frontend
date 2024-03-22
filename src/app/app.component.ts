import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final';
}
