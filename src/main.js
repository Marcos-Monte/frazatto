import '@/globals.scss';
import 'animate.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vue from 'vue';
import WOW from 'wow.js';
import App from './App.vue';
import router from './router';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Iniciando WOW.js para ativar animações ao rolar a pagina
const wow = new WOW({
  boxClass: 'wow',       // Classe que será animada
  animateClass: 'animate__animated', // Classe do animate.css
  offset: 100,           // Distância antes da ativação (100px antes de entrar na tela)
  mobile: true,          // Ativar animações em dispositivos móveis?
  live: true             // Atualizar para elementos carregados dinamicamente?
}).init();

Vue.config.productionTip = false

new Vue({
  router,
  wow,
  render: function (h) { return h(App) },
}).$mount('#app')
