import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { EcofarmHeaderComponent } from './components/ecofarm-header/ecofarm-header.component';
import { EcofarmFooterComponent } from './components/ecofarm-footer/ecofarm-footer.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NAV_ITEMS } from './navigation/nav-items';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    EcofarmHeaderComponent,
    EcofarmFooterComponent,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('snav') sideNav!: MatSidenav;
  readonly mobileNavItems = NAV_ITEMS;
  private readonly domainUrl = 'https://ecofarm.com.ua';
  private readonly fallbackTitle = 'Екофарм - Виробничі та роздрібні аптеки в Україні';
  private readonly fallbackDescription =
    'Екофарм - мережа виробничих та роздрібних аптек в Україні. Індивідуальне виготовлення ліків за рецептом лікаря.';

  isMobileMenuOpened = false;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.updateSeoTags());

    this.updateSeoTags();
  }

  private updateSeoTags(): void {
    const route = this.getDeepestRoute(this.activeRoute);
    const routeData = route.snapshot.data as { title?: string; description?: string };
    const title = routeData.title ?? this.fallbackTitle;
    const description = routeData.description ?? this.fallbackDescription;
    const canonicalUrl = `${this.domainUrl}${this.router.url}`;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    this.setCanonicalUrl(canonicalUrl);
  }

  private getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
    let currentRoute = route;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    return currentRoute;
  }

  private setCanonicalUrl(url: string): void {
    let canonicalElement = this.document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonicalElement) {
      canonicalElement = this.document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalElement);
    }

    canonicalElement.setAttribute('href', url);
  }

  openSidenav() {
    this.isMobileMenuOpened = true;
    this.sideNav.open();
  }

  closeSidenav() {
    this.isMobileMenuOpened = false;
    this.sideNav.close();
  }

  onSidenavToggle(isOpen: boolean) {
    this.isMobileMenuOpened = isOpen;
  }
}
