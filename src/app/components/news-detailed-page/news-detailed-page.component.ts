import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NewsItem } from '../../interfaces/news-item.model';
import { NewsRepository } from '../../services/news-repository.service';
import { Title } from '@angular/platform-browser';

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
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    if (!slug) {
      this.router.navigate(['/news']);
      return;
    }

    const found = this.repo.bySlug(slug);
    if (found) {
      this.news = found;
      this.titleService.setTitle(`${this.news.title} - Екофарм`);
      return;
    }
    // in case nothing has been found
    this.router.navigate(['/news']);
  }
}
