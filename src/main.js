import Vue from 'vue';
import App from './App.vue';
import SimpleVueValidation from 'simple-vue-validator';
import router from './router';

Vue.use(SimpleVueValidation);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
