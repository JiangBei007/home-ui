<template>
<div class="bor">
	<img src="../assets/icon/sign_bg.db29b0fb.png" />
	<div v-for="item in attr">{{item}}</div>
</div>
</template>
<script>
export default{
	data(){
		return{
			attr:[1,2,3,4,5]
		}
	}
}
</script>
<style lang="less">
	.bor{
		>div{
			color: #f00;
		}
	}
</style>