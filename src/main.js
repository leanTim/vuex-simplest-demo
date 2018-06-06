import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store/'
import ajax from './config/ajax'
import './style/base.css'
import './config/rem'

import swal from 'sweetalert2'
Vue.prototype.$swal = swal

Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	routes,
})

new Vue({
	router,
	store,
}).$mount('#app')