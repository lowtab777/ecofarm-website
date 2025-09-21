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
        id: 1,
        title: 'Завідувач аптеки',
        region: UAREGIONS.find((v) => v === 'Вінниця')!,
        address: '',
        salary: 30000,
        currency: 'UAH',
        schedule: '5/2, 8:00–20:00',
        requirements: [
          'фармацевтична освіта',
          'сертифікат провізора та повний пакет необхідних документів',
          'організаторські здібності',
          'відповідальність',
        ],
        responsibilities: ['консультація клієнтів', 'відпуск препаратів'],
        description: `ТОВ «ФК «ЕКОФАРМ» запрошує до співпраці завідувачів аптек у всіх обласних центрах України (окрім тимчасово окупованих територій та регіонів з активними бойовими діями).`,
        postedAt: new Date().toISOString(),
        contacts: {
          phone: '+380 97 889 72 62',
          telegram: '',
        },
      },
      {
        id: 2,
        title: 'Завідувач аптеки',
        region: UAREGIONS.find((v) => v === 'Київ')!,
        address: '',
        salary: 30000,
        currency: 'UAH',
        schedule: '5/2, 8:00–20:00',
        requirements: [
          'фармацевтична освіта',
          'сертифікат провізора та повний пакет необхідних документів',
          'організаторські здібності',
          'відповідальність',
        ],
        responsibilities: ['консультація клієнтів', 'відпуск препаратів'],
        description: `ТОВ «ФК «ЕКОФАРМ» запрошує до співпраці завідувачів аптек у всіх обласних центрах України (окрім тимчасово окупованих територій та регіонів з активними бойовими діями).`,
        postedAt: new Date().toISOString(),
        contacts: {
          phone: '+380 97 889 72 62',
          telegram: '',
        },
      },
      {
        id: 3,
        title: 'Завідувач аптеки',
        region: UAREGIONS.find((v) => v === 'Тернопіль')!,
        address: '',
        salary: 30000,
        currency: 'UAH',
        schedule: '5/2, 8:00–20:00',
        requirements: [
          'фармацевтична освіта',
          'сертифікат провізора та повний пакет необхідних документів',
          'організаторські здібності',
          'відповідальність',
        ],
        responsibilities: ['консультація клієнтів', 'відпуск препаратів'],
        description: `ТОВ «ФК «ЕКОФАРМ» запрошує до співпраці завідувачів аптек у всіх обласних центрах України (окрім тимчасово окупованих територій та регіонів з активними бойовими діями).`,
        postedAt: new Date().toISOString(),
        contacts: {
          phone: '+380 97 889 72 62',
          telegram: '',
        },
      },
      {
        id: 4,
        title: 'Завідувач аптеки',
        region: UAREGIONS.find((v) => v === 'Одеса')!,
        address: '',
        salary: 30000,
        currency: 'UAH',
        schedule: '5/2, 8:00–20:00',
        requirements: [
          'фармацевтична освіта',
          'сертифікат провізора та повний пакет необхідних документів',
          'організаторські здібності',
          'відповідальність',
        ],
        responsibilities: ['консультація клієнтів', 'відпуск препаратів'],
        description: `ТОВ «ФК «ЕКОФАРМ» запрошує до співпраці завідувачів аптек у всіх обласних центрах України (окрім тимчасово окупованих територій та регіонів з активними бойовими діями).`,
        postedAt: new Date().toISOString(),
        contacts: {
          phone: '+380 97 889 72 62',
          telegram: '',
        },
      },
      {
        id: 5,
        title: 'Завідувач аптеки',
        region: UAREGIONS.find((v) => v === 'Кропивницький')!,
        address: '',
        salary: 30000,
        currency: 'UAH',
        schedule: '5/2, 8:00–20:00',
        requirements: [
          'фармацевтична освіта',
          'сертифікат провізора та повний пакет необхідних документів',
          'організаторські здібності',
          'відповідальність',
        ],
        responsibilities: ['консультація клієнтів', 'відпуск препаратів'],
        description: `ТОВ «ФК «ЕКОФАРМ» запрошує до співпраці завідувачів аптек у всіх обласних центрах України (окрім тимчасово окупованих територій та регіонів з активними бойовими діями).`,
        postedAt: new Date().toISOString(),
        contacts: {
          phone: '+380 97 889 72 62',
          telegram: '',
        },
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

  deleteVacancie(id: number) {
    const filtered = this.getVacancies().filter((v) => v.id !== id);
    this.vacanciesSubject.next(filtered);
  }
}
