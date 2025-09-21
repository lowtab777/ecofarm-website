import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vacancie } from '../interfaces/vacancie.model';
import { UAREGIONS } from './ua-regions-repository.service';

@Injectable({ providedIn: 'root' })
export class VacancieService {
  private vacanciesSubject = new BehaviorSubject<Vacancie[]>([]);

  vacancies$: Observable<Vacancie[]> = this.vacanciesSubject.asObservable();

  constructor() {
    const mockVacancies: Vacancie[] = [
      {
        id: '1',
        title: 'Завідувач аптеки',
        region: UAREGIONS[0],
        address: '',
        salaryMin: 15000,
        salaryMax: 30000,
        currency: 'UAH',
        schedule: '5/2, 8:00–20:00',
        requirements:
          'фармацевтична освіта, сертифікат провізора та повний пакет необхідних документів, організаторські здібності, відповідальність',
        responsibilities: 'консультація клієнтів, відпуск препаратів',
        postedAt: new Date().toISOString(),
        contacts: {
          phone: '+380 97 889 72 62',
          telegram: '@https://t.me/CURDE',
        },
      },
      {
        id: '2',
        title: 'Фармацевт',
        region: UAREGIONS[11],
        address: 'вул. Соборна, 151',
        salaryMin: 15000,
        salaryMax: 20000,
        currency: 'UAH',
        schedule: '2/2, 9:00–21:00',
        requirements: 'фармацевтична освіта',
        responsibilities: 'консультація клієнтів, відпуск препаратів',
        postedAt: new Date().toISOString(),
        contacts: { phone: '+380671234567', telegram: '@https://t.me/CURDE' },
      },
    ];
    this.vacanciesSubject.next(mockVacancies);
  }

  getVacancies(): Vacancie[] {
    return this.vacanciesSubject.getValue();
  }

  addVacancie(newVacancie: Vacancie): void {
    const temp = this.getVacancies();
    this.vacanciesSubject.next([...temp, newVacancie]);
  }

  deleteVacancie(id: string) {
    const filtered = this.getVacancies().filter((v) => v.id !== id);
    this.vacanciesSubject.next(filtered);
  }
}
