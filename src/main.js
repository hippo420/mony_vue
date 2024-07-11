import { createApp } from 'vue';
import cookie from 'vue-cookies';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import store from './store/store.js';

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .use(cookie)
  .mount('#app')
