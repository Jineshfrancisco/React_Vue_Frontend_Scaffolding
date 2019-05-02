/***
 * ====================================================
 * Powerful Web Application Using Vue and CodeIgniter |
 * ====================================================
 */

// window._ = require('lodash');

window.Vue = require('vue');

Vue.component('welcome-vue', require('./vuejs/components/Welcome.vue').default);
Vue.component('fionn-vue', require('./vuejs/components/Fionn.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
	el: '#app'
});
