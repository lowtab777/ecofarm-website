import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Vacancy } from '../../interfaces/vacancie.model';
import { MatList, MatListItem, MatListItemIcon } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vacancies-card',
  imports: [MatCardModule, MatList, MatListItem, MatIcon, NgFor, MatListItemIcon],
  templateUrl: './vacancies-card.component.html',
  styleUrl: './vacancies-card.component.scss',
})
export class VacanciesCardComponent implements OnInit {
  @Input() vacancy!: Vacancy;

  ngOnInit(): void {}
}
