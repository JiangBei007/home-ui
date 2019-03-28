<template>
<div class="bor">
	<pa-input></pa-input>
</div>
</template>
<script>
import { PaInput } from "root-directory"
export default{
	components:{
		PaInput
	},
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