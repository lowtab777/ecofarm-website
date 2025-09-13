import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NewsItem } from '../../interfaces/news-item.model';
import { NewsRepository } from '../../services/news-repository.service';

@Component({
  selector: 'app-news-detailed-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news-detailed-page.component.html',
  styleUrls: ['./news-detailed-page.component.scss'],
})
export class NewsDetailedPageComponent implements OnInit {
  news: NewsItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private repo: NewsRepository,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('onInit')
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    if (!slug) {
      console.log('[NewsDetailed] slug пустой, возвращаю на /news');
      this.router.navigate(['/news']);
      return;
    }

    const found = this.repo.bySlug(slug);
    if (found) {
      this.news = found;
      return;
    }
    console.log(`[NewsDetailed] новость не найдена по slug="${slug}"`);
    // in case nothing has been found
    this.router.navigate(['/news']);
  }
}
