<template>
	<div class="s-select">
		<div class="title">select示例</div>
		<small-beautiful-select 
			:value-map="['key','value']" 
			title="身份证号" 
			placeholder="请选择" 
			v-model="seval"
			direction="rtl"
			@change="schange"
			:configure="configures">
		</small-beautiful-select>
	</div>
</template>

<script>
import {SmallBeautifulSelect} from "root-directory"
export default{
	name:"s-select",
	components:{
		SmallBeautifulSelect
	},
	data(){
		return{
			configures:[{key:1,value:"大黄"},{key:2,value:"小黑"}],
			seval:"",
		}
	},
	methods:{
		schange(val){
			console.log(val,this.seval)
		}
	}
}
</script>

<style>
.s-select .title{
		text-align: center;
		line-height: 36px;
		font-size: 16px;
	}
</style>
