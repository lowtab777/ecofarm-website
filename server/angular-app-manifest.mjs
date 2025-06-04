
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
    'index.csr.html': {size: 20768, hash: '5ed22b97286f641f00955b7e5cea5d847afb9c4eb358a2c1c8ca4e9848be9ba3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20608, hash: '841d6e6989c1f5a9071f6dbd64c5d7aedf3deb1f51bf2decb7f658063340adf6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/index.html': {size: 65555, hash: 'cb230d3895b424cd46a6bac43b605fac32a8fd223b261f67d8b4a734f41c8e82', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'contacts/index.html': {size: 62675, hash: '70c43112747393abe0461fe8ed29c80c4f1c7b0e1481953d8a373381a4166f7a', text: () => import('./assets-chunks/contacts_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 58192, hash: '550e9ea82f34bd78cf59a526eac531747da5f77cdba64df30b9a57d89afc0e8e', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'main-page/index.html': {size: 58722, hash: '22289109fe2052761aa4aaa1a73aa139d4fa21395733cf92f4b68d7116a057d8', text: () => import('./assets-chunks/main-page_index_html.mjs').then(m => m.default)},
    'styles-SONZXEAD.css': {size: 741, hash: 'Sw6VRzyEQ7k', text: () => import('./assets-chunks/styles-SONZXEAD_css.mjs').then(m => m.default)}
  },
};
