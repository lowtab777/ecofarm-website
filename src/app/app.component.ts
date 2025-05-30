import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EcofarmHeaderComponent } from './components/ecofarm-header/ecofarm-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EcofarmHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecofarm-website';
}
