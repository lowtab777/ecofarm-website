import { Component, OnInit } from '@angular/core';
import { NewsCardComponent } from '../news-card/news-card.component';
import { CommonModule } from '@angular/common';
import { NewsItem } from '../../interfaces/news-item';
import { NewsRepository } from '../../services/news-repository.service';

@Component({
  selector: 'app-news-page',
  imports: [CommonModule, NewsCardComponent],
  standalone: true,
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss',
})
export class NewsPageComponent implements OnInit {
  newsList!: NewsItem[];

  constructor(private repo: NewsRepository) {}
  ngOnInit(): void {
    this.newsList = this.repo.getAll();
  }
}
