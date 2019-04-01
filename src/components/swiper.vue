<template>
	<div class="small-beautiful-swiper-con">
		<div>
			<h3>轮播图</h3>
		</div>
		<div class="lr">
			<h5>左右方向</h5>
			<small-beautiful-swiper v-model="index" @on-slide="slideChange" direction="horizontal" :pagination="true">
				<template slot="small-beautiful-slide-list">
					<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /> </div>
				</template>
			</small-beautiful-swiper>
		</div>
		<div class="tb">
			<h5>上下方向</h5>
			<small-beautiful-swiper v-model="indexvertical" @on-slide="slideChangeTb" direction="vertical" :pagination="true">
				<template slot="small-beautiful-slide-list">
					<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /> </div>
				</template>
			</small-beautiful-swiper>
		</div>
		<div class="lr small-text">
			<h5>手动切换的文字型左右轮播</h5>
			<small-beautiful-swiper v-model="index1" direction="horizontal" :pagination="true">
				<template slot="small-beautiful-slide-list">
					<div v-for="i in 7">{{i}}</div>
				</template>
			</small-beautiful-swiper>
			<div class="btn">
				<span v-for="(i,index) in 7"  @click="slide(index)">切换到第{{index}}个</span>
			</div>
		</div>
	</div>
</template>

<script>
import	{SmallBeautifulSwiper} from "root-directory"
export default{
	name:"swiper",
	components:{
		SmallBeautifulSwiper
	},
	data(){
		return{
			index:2,
			indexvertical:0,
			index1:0,
		}
	},
	methods:{
		slideChange(index){
			console.log(index)
		},
		slideChangeTb(index){
			//console.log(index)
		},
		slide(index){
			this.index1 = index;
		}
	}
}
</script>

<style>
.small-beautiful-swiper-con{
	text-align: center;
	color: #ff711e;
}
.small-beautiful-swiper-con h3{
	line-height: 42px;
	font-size: 24px;
}
.small-beautiful-swiper-con>.lr h5{
	line-height: 32px;
	font-size: 16px;
}
.small-beautiful-swiper-con>.tb h5{
	line-height: 42px;
	font-size: 14px;
}
.small-beautiful-swiper-con .btn{
	display: flex;
	align-items: center;
	justify-content:space-around;
}
.small-beautiful-swiper-con .btn span{
	border: .5px solid #E5E5E5;
	display: block;
	padding: 5px 10px;
}
.small-text .small-beautiful-slide >div:nth-child(1){
	height: 300px;
}
.small-text .small-beautiful-slide >div:nth-child(1)>div{
	line-height:300px ;
	background: rgba(0,0,0,0.3);
	color: #fff;
	font-size: 28px;
}
</style>
