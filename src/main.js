import Vue from 'vue';
import App from './App.vue';
import Axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;
require('bootstrap/dist/css/bootstrap.min.css');
require('@/assets/css/theme.css');

new Vue({
    render: (h) => h(App),
}).$mount('#app');
