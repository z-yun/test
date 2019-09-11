import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/views/login.vue')
const Home = () => import('@/views/home.vue')
const Chart = () => import('@/views/chart.vue')

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/home',
      type: 'home',
      component: Home
    },
		{
		  path: '/login',
		  type: 'login',
		  component: Login
		},
		{
		  path: '/chart',
		  type: 'chart',
		  component: Chart
		},
  ]
})
