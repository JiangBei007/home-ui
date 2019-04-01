<template>
<div class="small-content">
	<div>
		<div v-for="item in items" @click="goto(item)">
			<span>{{item}}</span>
		</div>
	</div>
</div>
</template>
<script>
export default{
	data(){
		return{
			items:["swiper","input","toast","select","loading"]
		}
	},
	methods:{
		goto(path){
			this.$router.push({path:"/"+path})
		}
	}
}
</script>
<style>
.small-content>div{
	text-align:center;
}
.small-content>div>div{
	border: 0.5px solid #e5e5e5;
	color: #666;
	float: left;
	width: 49%;
	height: 100px;
	line-height: 100px;
}
.small-content>div>div span{
	color: #ff711e;
}
</style>