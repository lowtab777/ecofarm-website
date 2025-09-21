import { VacancieService } from './../../services/vacancies.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { VacanciesCardComponent } from '../vacancies-card/vacancies-card.component';
import { Vacancie } from '../../interfaces/vacancie.model';
import { EcofarmVacancieFilterComponent } from '../../features/filter/ecofarm-vacancie-filter/ecofarm-vacancie-filter.component';

@Component({
  selector: 'app-vacancies-page',
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    VacanciesCardComponent,
    EcofarmVacancieFilterComponent,
  ],
  templateUrl: './vacancies-page.component.html',
  styleUrl: './vacancies-page.component.scss',
})
export class VacanciesPageComponent implements OnInit {
  private _vacanciesOrigin!: Vacancie[];
  vacancies!: Vacancie[];

  isVacancieListEmpty: boolean = true;

  private _cityFilterValue = '';
  private _roleFilterValue = '';

  constructor(private vacancieService: VacancieService) {}

  ngOnInit(): void {
    this._vacanciesOrigin = this.vacancieService.getVacancies();
    this.vacancies = [...this._vacanciesOrigin];
  }

  onCityFilterChange(query: string) {
    // replace w observable subsription for filterVacancies()
    this._cityFilterValue = query;
    this.filterVacancies();
  }

  onRoleFIlterChange(query: string) {
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
