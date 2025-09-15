import { VacancieService } from './../../services/vacancies.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { VacanciesCardComponent } from '../vacancies-card/vacancies-card.component';
import { Vacancie } from '../../interfaces/vacancie.model';

@Component({
  selector: 'app-vacancies-page',
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    VacanciesCardComponent,
  ],
  templateUrl: './vacancies-page.component.html',
  styleUrl: './vacancies-page.component.scss',
})
export class VacanciesPageComponent implements OnInit {
  vacancie!: Vacancie;
  isVacancieListEmpty: boolean = true;

  constructor(private vacancieService: VacancieService) {}

  ngOnInit(): void {

    this.vacancie = this.vacancieService.getVacancies()[0];

    // this.vacancie = {
    //   id: '1',
    //   title: 'Продавець-консультант',
    //   currency: 'UAH',
    //   description: 'Продавець-консультант має ...',
    //   address: 'м. Вінниця Молодіжна 123',
    //   salaryMin: 15000,
    //   salaryMax: 20000,
    //   postedAt: '13-09-2025',
    //   region: 'Вінницька',
    //   contacts: { telegram: 'https://t.me/chik1k' },
    // };
  }

}
