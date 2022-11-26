import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue"
export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/Main', 
			component: () => import('@/pages/Layout.vue'),
			children: [
				{
					path: '/Home', component: MainPage, alias: '/'
				},
			]
		}
	]
})