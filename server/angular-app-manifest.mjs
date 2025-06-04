
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'lowtab777.github.io/ecofarm-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/lowtab777.github.io/ecofarm-website/news"
  },
  {
    "renderMode": 2,
    "route": "/lowtab777.github.io/ecofarm-website/contacts"
  },
  {
    "renderMode": 2,
    "route": "/lowtab777.github.io/ecofarm-website/about-us"
  },
  {
    "renderMode": 2,
    "route": "/lowtab777.github.io/ecofarm-website/main-page"
  },
  {
    "renderMode": 2,
    "route": "/lowtab777.github.io/ecofarm-website/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 20760, hash: '82b7a0df33cf984521d2c159bb6a3ddfa183162fbd4d99e184308e37f274d7b8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20600, hash: '3630c6cac500eb76bf4137f7432b02a6a35f68503bcc19b0c7caf9431fab1d4e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contacts/index.html': {size: 58682, hash: '100d1cd7575960447e7f14392936d373a542d3056d577d98f58e1d4a5ffff28b', text: () => import('./assets-chunks/contacts_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 58682, hash: '100d1cd7575960447e7f14392936d373a542d3056d577d98f58e1d4a5ffff28b', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 58682, hash: '100d1cd7575960447e7f14392936d373a542d3056d577d98f58e1d4a5ffff28b', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'main-page/index.html': {size: 58682, hash: '100d1cd7575960447e7f14392936d373a542d3056d577d98f58e1d4a5ffff28b', text: () => import('./assets-chunks/main-page_index_html.mjs').then(m => m.default)},
    'styles-SONZXEAD.css': {size: 741, hash: 'Sw6VRzyEQ7k', text: () => import('./assets-chunks/styles-SONZXEAD_css.mjs').then(m => m.default)}
  },
};
