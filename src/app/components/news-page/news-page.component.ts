import { Component } from '@angular/core';
import { NewsCardComponent } from "../news-card/news-card.component";

@Component({
  selector: 'app-news-page',
  imports: [NewsCardComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {

}
