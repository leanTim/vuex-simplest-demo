import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store/'
import ajax from './config/ajax'
import './style/base.css'
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	routes,
})

new Vue({
	router,
	store,
}).$mount('#app')