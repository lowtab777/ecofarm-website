
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://lowtab777.github.io/ecofarm-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ecofarm-website/news"
  },
  {
    "renderMode": 2,
    "route": "/ecofarm-website/contacts"
  },
  {
    "renderMode": 2,
    "route": "/ecofarm-website/about-us"
  },
  {
    "renderMode": 2,
    "route": "/ecofarm-website/main-page"
  },
  {
    "renderMode": 2,
    "route": "/ecofarm-website/team"
  },
  {
    "renderMode": 2,
    "route": "/ecofarm-website/licenses"
  },
  {
    "renderMode": 2,
    "route": "/ecofarm-website/products"
  },
  {
    "renderMode": 2,
    "route": "/ecofarm-website/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 20768, hash: 'c95b807406541a303315dc330d07396ad050eef0f64dc2882a6464281c128f67', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20608, hash: '4b058b32ba771f20fe19d330b25a52579ee7d444231291ba733fdc5f7db34b2b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 62125, hash: '6e35a350c1aa1d27ea23dcc1efd6122013802d5203c325a37d78cef3d6853ed7', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'contacts/index.html': {size: 66029, hash: 'e49e979246b6abaa441af3d9503557dc6719532aec901311c2df0def9f6ae2b5', text: () => import('./assets-chunks/contacts_index_html.mjs').then(m => m.default)},
    'licenses/index.html': {size: 59862, hash: '89fac7519ce5d71411b73202d1ed2fc207e0121d8290e9f8816ce26ce976483e', text: () => import('./assets-chunks/licenses_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 67679, hash: '46e9b8daa1ab0cf665f3b18a1243592926528ae13300a79575dec7a8196dd1fc', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 58766, hash: '770da372d40d752f31582d4c19885626a161017e3e74663cca902f9f70454e0a', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'main-page/index.html': {size: 62971, hash: 'f0298d0959a4aac6c42d6de698e81da729327521376b463d231248a0d0bed468', text: () => import('./assets-chunks/main-page_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 71076, hash: 'fc4edcafb3768fd8f3bdff7340d52d856e79aa462e797ea2c0866e5d4eed249e', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'styles-PBW7COQJ.css': {size: 1887, hash: '7uJV6C0dfQs', text: () => import('./assets-chunks/styles-PBW7COQJ_css.mjs').then(m => m.default)}
  },
};
