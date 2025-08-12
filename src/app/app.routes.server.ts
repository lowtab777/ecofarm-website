import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },

  { path: 'news', renderMode: RenderMode.Prerender },

  {
    path: 'news/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const slugs: string[] = (await import('./data/news-slug.json')).default;
      return slugs.map((slug) => ({ slug }));
    },
  },

  { path: '**', renderMode: RenderMode.Client },
];
