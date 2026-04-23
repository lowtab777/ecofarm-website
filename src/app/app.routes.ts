import { Routes } from '@angular/router';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { LicensesPageComponent } from './components/licenses-page/licenses-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { NewsDetailedPageComponent } from './components/news-detailed-page/news-detailed-page.component';
import { VacanciesPageComponent } from './components/vacancies-page/vacancies-page.component';

// add lazy loading
export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  {
    path: 'news',
    component: NewsPageComponent,
    data: {
      title: 'Новини | Екофарм',
      description: 'Актуальні новини компанії Екофарм, відкриття аптек та оновлення мережі по Україні.',
    },
  },
  {
    path: 'news/:slug',
    component: NewsDetailedPageComponent,
    data: {
      title: 'Новина | Екофарм',
      description: 'Детальна новина компанії Екофарм.',
    },
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: {
      title: 'Контакти | Екофарм',
      description: 'Контактна інформація компанії Екофарм та мережі аптек.',
    },
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: {
      title: 'Про нас | Екофарм',
      description: 'Про компанію Екофарм, місію, цінності та розвиток фармацевтичної мережі в Україні.',
    },
  },
  {
    path: 'main-page',
    component: MainPageComponent,
    data: {
      title: 'Екофарм - Виробничі та роздрібні аптеки в Україні',
      description:
        'Екофарм - мережа виробничих та роздрібних аптек в Україні. Індивідуальне виготовлення ліків за рецептом лікаря. Ecofarm pharmacy network in Ukraine.',
    },
  },
  {
    path: 'team',
    component: TeamPageComponent,
    data: {
      title: 'Команда | Екофарм',
      description: 'Команда фахівців Екофарм та експерти фармацевтичного напрямку.',
    },
  },
  {
    path: 'licenses',
    component: LicensesPageComponent,
    data: {
      title: 'Ліцензії | Екофарм',
      description: 'Ліцензії, дозволи та регуляторна інформація компанії Екофарм.',
    },
  },
  {
    path: 'products',
    component: ProductsPageComponent,
    data: {
      title: 'Продукція | Екофарм',
      description: 'Продукція Екофарм: лікарські засоби та фармацевтичні рішення для пацієнтів.',
    },
  },
  {
    path: 'vacancies',
    component: VacanciesPageComponent,
    data: {
      title: 'Вакансії | Екофарм',
      description: 'Вакансії в Екофарм: приєднуйтесь до команди фармацевтичної компанії.',
    },
  },
  {
    path: '**',
    component: MainPageComponent,
    data: {
      title: 'Екофарм - Виробничі та роздрібні аптеки в Україні',
      description:
        'Екофарм - мережа виробничих та роздрібних аптек в Україні. Індивідуальне виготовлення ліків за рецептом лікаря.',
    },
  },
];
