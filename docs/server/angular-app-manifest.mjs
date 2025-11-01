
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
    'index.csr.html': {size: 458, hash: 'acfde31beccee68ba511514139205b79019bcacd02bc3441f2b1164f4483067e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 971, hash: '74b35b5ee9a594e74afd04027b66284f511f68fa37578a15f7c4e3c5bbb37b9c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21598, hash: '907952a18c6277e7194092efa443c9571f590f24d3b149b122dc6d52425ed621', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
