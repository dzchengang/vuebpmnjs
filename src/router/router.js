import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const routerMap = [{
		path: '/',
		name: 'bpmn',
		component: () => import('../views/Bpmn.vue')
	}
]

export default new Router({
	mode: 'history',
	routes: routerMap
})
