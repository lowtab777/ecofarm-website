import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Vacancie } from "../interfaces/vacancie.model";

@Injectable({ providedIn: 'root' })
export class VacancieService {
  private vacanciesSubject = new BehaviorSubject<Vacancie[]>([]);

  vacancies$: Observable<Vacancie[]> = this.vacanciesSubject.asObservable();

  constructor() {

    const mockVacancies: Vacancie[] = [
      {
        id: '1',
        title: 'Фармацевт',
        region: "Вінницька",
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
    const filtered = this.getVacancies().filter(v => v.id !== id);
    this.vacanciesSubject.next(filtered);
  }


}