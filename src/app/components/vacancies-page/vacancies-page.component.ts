import { VacancyService } from './../../services/vacancies.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { VacanciesCardComponent } from '../vacancies-card/vacancies-card.component';
import { Vacancy } from '../../interfaces/vacancie.model';
import { EcofarmVacancyFilterComponent } from '../../features/filter/ecofarm-vacancie-filter/ecofarm-vacancie-filter.component';

@Component({
  selector: 'app-vacancies-page',
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    VacanciesCardComponent,
    EcofarmVacancyFilterComponent,
  ],
  templateUrl: './vacancies-page.component.html',
  styleUrl: './vacancies-page.component.scss',
})
export class VacanciesPageComponent implements OnInit {
  private _vacanciesOrigin!: Vacancy[];
  vacancies!: Vacancy[];

  isVacancyListEmpty: boolean = true;

  private _cityFilterValue = '';
  private _roleFilterValue = '';

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this._vacanciesOrigin = this.vacancyService.getVacancies();
    this.vacancies = [...this._vacanciesOrigin];
  }

  onCityFilterChange(query: string) {
    this._cityFilterValue = query;
    this.filterVacancies();
  }

  onRoleFilterChange(query: string) {
    this._roleFilterValue = query;
    this.filterVacancies();
  }

  private filterVacancies(): void {
    this.vacancies = this._vacanciesOrigin.filter(
      (v) =>
        v.region?.startsWith(this._cityFilterValue) &&
        v.title.startsWith(this._roleFilterValue)
    );
  }
}
