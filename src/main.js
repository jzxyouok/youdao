import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import App from './App'
const routes = [
	{ path: '/',  redirect: '/index'},

	{ path: '/index', component: resolve => require(['./pages/index.vue'], resolve) },

	// { path: '/search', component: resolve => require(['./pages/search.vue'], resolve) }

];

const router = new VueRouter({
	routes, // （缩写）相当于 routes: routes,
	mode: 'hash'
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
