import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Paths to dist output (server & browser) */
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtmlPath = join(browserDistFolder, 'index.html');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * (optional) trust proxy if you are behind a reverse proxy like Nginx/Heroku
 */
// app.set('trust proxy', 1);

/**
 * Example REST API (define real handlers before SPA/SSR fallback)
 * Все API-маршруты объявляй ДО SSR/SPA фоллбэка.
 */
// app.use('/api', yourApiRouter);

/**
 * Serve static files from /browser
 * Отдаём статику как есть. index:false — чтобы index.html отдавался только нашим фоллбэком, а не статикой.
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
    fallthrough: true, // важная опция: отдаём 404 статики дальше по цепочке (SSR/SPA обработает)
  }),
);

/**
 * SSR handler for all non-static, non-API GET requests
 * SSR-обработчик для всех не-статических и не-API GET запросов.
 *
 * ВАЖНО:
 *  - если SSR вернул ответ — пишем его (это корректно обрабатывает и deep-link, и 404 внутри Angular).
 *  - если SSR не вернул ответ (response === null) — делаем SPA-фоллбэк на index.html.
 *  - если хочешь, чтобы даже SSR-404 отдавались как 200 с главной — можно раскомментировать блок "force SPA fallback on SSR 404".
 */
app.get('*', async (req, res, next) => {
  try {
    // Пропускаем не-GET (например, POST на API) — их должны обрабатывать выше
    if (req.method !== 'GET') return next();

    // Не трогаем API-маршруты — их должны обрабатывать выше
    if (req.path.startsWith('/api')) return next();

    // SSR render
    const response = await angularApp.handle(req);

    if (response) {
      // --- Если хочешь превращать SSR-404 в SPA 200, раскомментируй:
      // if (response.status === 404) {
      //   return res.sendFile(indexHtmlPath);
      // }
      return writeResponseToNodeResponse(response, res);
    }

    // SPA fallback: если SSR не вернул ответа (напр., нет матчинга), отдаем index.html
    return res.sendFile(indexHtmlPath);
  } catch (err) {
    return next(err);
  }
});

/**
 * Start the server if this module is the main entry point.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Prerender params for routes (пример из твоего кода)
 */
export async function getPrerenderParams(route: string) {
  if (route === 'news/:slug') {
    const slugs: string[] = (await import('./app/data/news-slug.json')).default;
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
