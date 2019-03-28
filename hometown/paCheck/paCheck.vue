<template>
<div class="pa-check">
	<div @click="chan">点击</div>
	<div>{{current}}</div>
</div>
</template>

<script>
export default {
	props:{
		value:0,
	},
	watch:{
		current(nvl){
			this.$emit("input",nvl)
			this.$emit("on-change",nvl)
		}
	},
	created(){
			
	},
	data() {
		return {
			current:0
		};
	},
	methods:{
		chan(){
			this.current++
		}
	}
}
</script>

<style lang="less">
.pa-check{
	
}
</style>
