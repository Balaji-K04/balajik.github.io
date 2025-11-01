
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/balajik.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/balajik.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 458, hash: '007c27a2b99eca4428160e0b14a74a7796a02499aeef94e7acd5ffd9f2664fe4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 971, hash: 'e6e5ce6b0646cf3567ae6a19206663c74dacdbe933002af0db533b1ec8b360cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21598, hash: '907952a18c6277e7194092efa443c9571f590f24d3b149b122dc6d52425ed621', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
