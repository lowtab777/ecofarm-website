import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NewsItem } from '../../interfaces/news-item.model';
import { NewsRepository } from '../../services/news-repository.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-detailed-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news-detailed-page.component.html',
  styleUrl: './news-detailed-page.component.scss',
})
export class NewsDetailedPageComponent implements OnInit {
  news: NewsItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private repo: NewsRepository,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
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
      const seoTitle = `${this.news.title} | Екофарм`;
      const seoDescription = this.news.description;
      const pageUrl = `https://ecofarm.com.ua${this.router.url}`;

      this.titleService.setTitle(seoTitle);
      this.metaService.updateTag({ name: 'description', content: seoDescription });
      this.metaService.updateTag({ property: 'og:title', content: seoTitle });
      this.metaService.updateTag({ property: 'og:description', content: seoDescription });
      this.metaService.updateTag({ property: 'og:url', content: pageUrl });
      this.metaService.updateTag({ name: 'twitter:title', content: seoTitle });
      this.metaService.updateTag({ name: 'twitter:description', content: seoDescription });
      return;
    }
    // in case nothing has been found
    this.router.navigate(['/news']);
  }
}
