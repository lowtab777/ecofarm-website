import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ecofarm-header',
  imports: [MatToolbarModule, RouterModule, MatButtonModule, MatIconModule, CommonModule ],
  templateUrl: './ecofarm-header.component.html',
  styleUrl: './ecofarm-header.component.scss'
})
export class EcofarmHeaderComponent {

}
