import { Component } from '@angular/core';
import { NewsCardComponent } from "../news-card/news-card.component";

@Component({
  selector: 'app-news-page',
  imports: [NewsCardComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
  tempText: string = `У рамках національної стратегії розширення мережі ТОВ "ФК "Екофарм" ми відкриваємо ліцензовані виробничі аптеки`;
}
