
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mydonmac/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/mydonmac/login",
    "route": "/mydonmac"
  },
  {
    "renderMode": 2,
    "route": "/mydonmac/login"
  },
  {
    "renderMode": 2,
    "route": "/mydonmac/menu"
  },
  {
    "renderMode": 2,
    "route": "/mydonmac/signup"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2025, hash: '4f7515568928231f8268ea134773bac4deb40c94056c3d5f82c7e26383f4f18c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2371, hash: 'b84706ead5a5b97e5408caa96d29b482e3152c95b1bf1df39158c2aa58178e5b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 5831, hash: 'a1899be40ed921e696df8bee888d1ae4629c686e5d7192d1c8c19f2c1d47596f', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6221, hash: 'e56d8b9dea07501759ab094073de5e5f10bc59acc4de0c0dcf748be8ccb0425c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 5388, hash: '53a32575f2b6f3e0ca9bf3a371311eb3771c067e35ad4f6d6bc7cb587d681258', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'styles-24JM3Z6T.css': {size: 42, hash: 'umJv61F35VQ', text: () => import('./assets-chunks/styles-24JM3Z6T_css.mjs').then(m => m.default)}
  },
};
