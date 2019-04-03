<template>
	<div class="s-toast">
		<small-beautiful-toast :type="total" v-model="show">你好</small-beautiful-toast>
		<div>
			<div class="btn" @click="toast('success')">success</div>
			<div class="btn"  @click="toast('warn')">warn</div>
			<div class="btn"  @click="toast('cancel')">cancel</div>
			<div class="btn"  @click="toast('text')">text</div>
			<div class="btn"  @click="toastpublin('')">插件text调用</div>
			<div class="btn"  @click="toastpublin('success')">插件success调用</div>
		</div>
	</div>
</template>

<script>
import {SmallBeautifulToast} from "root-directory"
export default{
	name:"s-toast",
	components:{
		SmallBeautifulToast
	},
	data(){
		return{
			show:false,
			total:"",
		}
	},
	methods:{
		toast(type){
			this.total = type;
			this.show = true;
		},
		toastpublin(type){
			if(type){
				this.$beautiful.toast.show({
					type:"success",
					text:"出来吧我的小伙"
				})
			}else{
				this.$beautiful.toast.text('出来吧我的小伙伴')
			}
			
		}
	}
}
</script>

<style>
.s-toast .btn{
	background: linear-gradient(90deg, rgb(29, 98, 240), rgb(25, 213, 253));
    color: rgb(255, 255, 255);
	position: relative;
    display: block;
    margin: 10px auto;
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
