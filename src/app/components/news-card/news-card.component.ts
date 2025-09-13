import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NewsItem } from '../../interfaces/news-item.model';

@Component({
  selector: 'app-news-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input() news!: NewsItem;
}
