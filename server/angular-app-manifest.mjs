
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
    "route": "/ecofarm-website/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 20768, hash: '3f5083fff0ccf0e4b017f1c540dd9bf6c45f542a94ef026892f747d56913bdf9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20608, hash: 'ee6a0a9383753324a3eb19491e6c8d8e4cb87eca5dcd6c73c078106718f7e3bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contacts/index.html': {size: 63692, hash: '81b9ca6377bf08482d29a5476eafdd57c9c0d879ef469d75026d8137e876a233', text: () => import('./assets-chunks/contacts_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 65686, hash: 'b2fbe29e11d25e220f11f9d7e07b03d708b5cf869d4da4f044e8dd89cfeb22e9', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 58323, hash: '71804df504086cb716f4444d127286ea3787e9d5682ece43090fab37bfe02867', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'main-page/index.html': {size: 58852, hash: '995f742b7e8d6fdbced8661318fbdef9addfe66fd78fe91dbef5c55971507220', text: () => import('./assets-chunks/main-page_index_html.mjs').then(m => m.default)},
    'styles-DFGMW5AU.css': {size: 757, hash: 'MT/pC3AEWPo', text: () => import('./assets-chunks/styles-DFGMW5AU_css.mjs').then(m => m.default)}
  },
};
