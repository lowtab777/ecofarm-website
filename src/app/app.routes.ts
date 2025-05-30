import { Routes } from '@angular/router';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
    {path:'news', component: NewsPageComponent},
    {path:'contacts', component: ContactsComponent},
    {path:'about-us', component: AboutUsComponent},
    {path:'main-page', component: MainPageComponent},
    {path:'**', component: MainPageComponent},
];
