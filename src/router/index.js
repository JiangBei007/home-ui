import Vue from 'vue'
import Router from 'vue-router'






import index  from './../components/index.vue'
import swiper  from './../components/swiper.vue'
import input  from './../components/input.vue'
import toast  from './../components/toast.vue'
import select  from './../components/select.vue'
import loading  from './../components/loading.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
		{
			path:"/swiper",
			component:swiper
		},
		{
			path:"/input",
			component:input
		},
		{
			path:"/toast",
			component:toast
		},
		{
			path:"/select",
			component:select
		},
		{
			path:"/loading",
			component:loading
		}
  ]
})
