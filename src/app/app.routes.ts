import { Routes } from '@angular/router';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { LicensesPageComponent } from './components/licenses-page/licenses-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { NewsDetailedPageComponent } from './components/news-detailed-page/news-detailed-page.component';
import { VacanciesCardComponent } from './components/vacancies-card/vacancies-card.component';
import { VacanciesPageComponent } from './components/vacancies-page/vacancies-page.component';

// add lazy loading
export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'news', component: NewsPageComponent },
  { path: 'news/:slug', component: NewsDetailedPageComponent},
  { path: 'contacts', component: ContactsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'licenses', component: LicensesPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'vacancies', component: VacanciesPageComponent },
  { path: '**', component: MainPageComponent },
];
