<template>
	<div class="s-loading">
		<small-beautiful-loading :show="show" :icon="icon">加载中</small-beautiful-loading>
		<div class="btn"  @click="load('')">点击我显示</div>
		<div class="btn"  @click="load('loop')">点击我显示loop--loading</div>
		<div class="btn"  @click="load('arrow')">点击我显示arrow--loading</div>
		<div class="btn"  @click="load('circle')">点击我显示circle--loading</div>
	</div>
</template>

<script>
import {SmallBeautifulLoading} from "root-directory"
export default{
	name:"s-loading",
	components:{
		SmallBeautifulLoading
	},
	data(){
		return{
			show:false,
			icon:"",
		}
	},
	methods:{
		load(type){
			this.icon = type;
			this.show = true;
			setTimeout(()=>{
				this.show = false;
			},2000)
		}
	}
}
</script>

<style>
.s-loading .btn{
	background: linear-gradient(90deg, rgb(29, 98, 240), rgb(25, 213, 253));
    color: rgb(255, 255, 255);
	position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
	margin-top: 10px;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    line-height: 2.33333333;
    border-radius: 5px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
	width: 88%;
}
</style>
