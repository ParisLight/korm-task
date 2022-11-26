import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue"
export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/', 
			component: () => import('@/pages/Layout.vue'),
			children: [
				{
					path: '/Home', component: MainPage, alias: '/'
				},
			]
		}
	]
})