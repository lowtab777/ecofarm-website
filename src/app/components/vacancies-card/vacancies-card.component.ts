import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Vacancie } from '../../interfaces/vacancie.model';

@Component({
  selector: 'app-vacancies-card',
  imports: [MatCardModule],
  templateUrl: './vacancies-card.component.html',
  styleUrl: './vacancies-card.component.scss'
})
export class VacanciesCardComponent implements OnInit {

  @Input() vacancie!: Vacancie;
  



    ngOnInit(): void {

  }
}
