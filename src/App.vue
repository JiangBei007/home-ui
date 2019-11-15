<template>
  <div id="app">
		<transition :name="transitionName">
			<router-view/>
		</transition>
  </div>
</template>
<script>
import na from './until/index'
console.log(na)
export default{
	name:"app",
	watch:{
		'$route' (to, from) {
			const toDepth = to.path.split('/').length
			const fromDepth = from.path.split('/').length
			this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		}
	},
	data(){
		return{
			transitionName:""
		}
	}
}
</script>
