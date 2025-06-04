
export default {
  basePath: 'https://lowtab777.github.io/ecofarm-website',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
