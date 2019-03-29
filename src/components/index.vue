<template>
<div class="bor">
	<small-beautiful-input title="省市区：" v-model="val"></small-beautiful-input>
	<small-beautiful-toast :type="total" v-model="toastShow">你好</small-beautiful-toast>
	<small-beautiful-loading :show="show" :icon="icon">加载中</small-beautiful-loading>
	<div>
		<button @click="toastsuccess">success</button>
		<button @click="toastwarn">warn</button>
		<button @click="toastcancel">cancel</button>
		<button @click="toasttext">text</button>
		<div>
			<button @click="chajian" style="width:100px;height:32px">插件形式调用</button>
			<button @click="chajian1" style="width:100px;height:32px">插件形式111调用</button>
		</div>
		
		<div style="padding: 20px 0;">
			<button @click="loopShow">点击我显示loop--loading</button>
			<button @click="arrowShow">点击我显示arrow--loading</button>
			<button @click="circleShow">点击我显示circle--loading</button>
		</div>
	</div>
</div>
</template>
<script>
import { SmallBeautifulInput ,SmallBeautifulToast,SmallBeautifulLoading} from "root-directory"
export default{
	components:{
		SmallBeautifulInput,
		SmallBeautifulToast,
		SmallBeautifulLoading,
	},
	data(){
		return{
			val:"",
			toastShow:false,
			total:"",
			show:false,
			icon:'',
		}
	},
	methods:{
		toastsuccess(){
			this.total = "success"
			this.toastShow = true;
		},
		toastwarn(){
			this.total = "warn"
			this.toastShow = true;
		},
		toastcancel(){
			this.total = "cancel"
			this.toastShow = true;
		},
		toasttext(){
			this.total = "text"
			this.toastShow = true;
		},
		chajian(){
			console.log(this.$beautiful)
			this.$beautiful.toast.text('出来吧我的小伙伴')
		},
		chajian1(){
			this.$beautiful.toast.show({
				type:"success",
				text:"出来吧我的小伙"
			})
		},
				loopShow(){
			this.icon = 'spot';
			this.show = true;
			setTimeout(()=>{
				this.show = false
			},5000)
		},
		arrowShow(){
			this.icon = 'spotcolor';
			this.show = true;
			setTimeout(()=>{
				this.show = false
			},5000)
		},
		circleShow(){
			this.icon = 'circle';
			this.show = true;
			setTimeout(()=>{
				this.show = false
			},5000)
		},
	}
}
</script>
<style lang="less">
	.bor{
		>div{
			
		}
	}
</style>