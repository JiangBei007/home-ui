<template>
<div class="pa-touch-slide">
	<div
		ref="pa-touch-slide-dom"
		 v-stouch="moveFn"
		 :data-index="index"
		 :data-moved="0" 
		 :data-scalewidth="scalewidth" 
		 :data-direction="direction"
		 :class="{'pa-touch-slide-lr':direction==='horizontal','pa-touch-slide-tb':direction==='vertical'}"
		 :data-lth="lth">
		<slot name="pa-touch-slide-list">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</slot>
	</div>
	<div v-if="pagination">
		<span v-for="(it,ind) in lth" :class="{'pa-touch-slide-active':ind==index}"></span>
	</div>
</div>
</template>

<script>
export default{
	directives:{
		stouch:{
			bind(el,context){
				const {abs} = Math;
				let sx = 0,sy = 0,mx = 0,my = 0,sd = 0,direction;
				if(el.dataset.direction==="horizontal")direction='lr';
				if(el.dataset.direction==="vertical")direction='tb';
				el.addEventListener("touchstart",event=>{
					sx = event.touches[0].clientX;
					sy = event.touches[0].clientY;
					sd = +new Date();
				})
				el.addEventListener("touchmove",event=>{
					const sw = el.dataset.scalewidth;
					const i = parseInt(el.dataset.index);
					const lth = parseInt(el.dataset.lth);
					const moved = parseFloat(el.dataset.moved);
					mx = event.changedTouches[0].clientX - sx;
					my = event.changedTouches[0].clientY - sy;
					if(direction==='lr'&&abs(mx)>abs(my)){
						event.preventDefault()
					};
					if(direction==='tb'&&abs(my)>abs(mx)){
						event.preventDefault()
					};
					if(i===0){
						let mv = 0;
						if(direction==='lr'){
							if(mx>0){
								mv = mx/6+moved;
							}else{
								mv = mx+moved;
							}
							el.style.transform = "translate3d("+mv+"px,0,0)";
						}
						if(direction==='tb'){
							if(my>0){
								mv = my/6+moved;
							}else{
								mv = my+moved;
							}
							el.style.transform = "translate3d(0,"+mv+"px,0)";
						}
						el.style.transition = null;
						return;
					};
					if(i===(lth-1)){
						let mv = 0;
						if(direction==='lr'){
							if(mx<0){
								mv = mx/6+moved;
							}else{
								mv = mx+moved;
							}
							el.style.transform = "translate3d("+mv+"px,0,0)";
						}
						if(direction==='tb'){
							if(my<0){
								mv = my/6+moved;
							}else{
								mv = my+moved;
							}
							el.style.transform = "translate3d(0,"+mv+"px,0)";
						}
						el.style.transition = null;
						return;
					};
					if(direction==='lr'){
							el.style.transform = "translate3d("+(mx+moved)+"px,0,0)";
						}
					if(direction==='tb'){
						el.style.transform = "translate3d(0,"+(my+moved)+"px,0)";
					}
					el.style.transition = null;
				})
				el.addEventListener("touchend",(event)=>{
					const ex = event.changedTouches[0].clientX-sx;
					const ey = event.changedTouches[0].clientY-sy;
					const ed = +new Date() - sd;
					if(direction==='lr'){
						context.value(el,ex,ed)
					}
					if(direction==='tb'){
						context.value(el,ey,ed)
					}
				})
			},
			update(el,context){
				const w = parseFloat(el.dataset.scalewidth);
				const i = parseInt(el.dataset.index);
				let direction;
				if(el.dataset.direction==="horizontal")direction='lr';
				if(el.dataset.direction==="vertical")direction='tb';
				if(direction==='lr'){
					el.style.transform = "translate3d("+-(w*i)+"px,0,0)";
				}
				if(direction==='tb'){
					el.style.transform = "translate3d(0,"+-(w*i)+"px,0)";
				}
				el.style.transition = "transform .5s";
				el.dataset.moved = -(w*i);
				context.value(null,0,0,i)
			}
		}
	},
	methods:{
		moveFn(el,ex,ed,ki){
			if(typeof(ki)==='number'){
				this.i = ki;
				return;
			}
			const sw = parseFloat(el.dataset.scalewidth);
			const lth = parseInt(el.dataset.lth);
			let i = parseInt(el.dataset.index),direction;
			if(el.dataset.direction==="horizontal")direction='lr';
			if(el.dataset.direction==="vertical")direction='tb';;
			if(i===0&&ex>0){
				el.style.transform = "translate3d(0,0,0)";
				el.style.transition = "transform .5s";
				return;
			}
			if(Math.abs(i)===(lth-1)&&ex<0){
				if(direction==='lr'){
					el.style.transform = "translate3d("+-(sw*i)+"px,0,0)";
				}
				if(direction==='tb'){
					el.style.transform = "translate3d(0,"+-(sw*i)+"px,0)";
				}
				el.style.transition = "transform .5s";
				return;	
			}
			if(ed<300&&Math.abs(ex)>30){
				let scale;
				if(ex>0)scale = i-1;
				if(ex<0)scale = i+1;
					el.dataset.index = scale;
					this.i = scale;
					//this.$emit("on-pa-touch-slide",scale);
				if(direction==='lr'){
					el.style.transform = "translate3d("+-(sw*scale)+"px,0,0)";
				}
				if(direction==='tb'){
					el.style.transform = "translate3d(0,"+-(sw*scale)+"px,0)";
				}
					el.style.transition = "transform .5s";
					el.dataset.moved = -(sw*scale);
				return;
			}
			if(Math.abs(ex)<=(sw/2)){
				if(direction==='lr'){
					el.style.transform = "translate3d("+-(sw*i)+"px,0,0)";
				}
				if(direction==='tb'){
					el.style.transform = "translate3d(0,"+-(sw*i)+"px,0)";
				}
				el.style.transition = "transform .5s";
				return;
			}
			if(Math.abs(ex)>(sw/2)){
				let scale,mv;
				if(ex>0)scale = i-1;
				if(ex<0)scale = i+1;
					el.dataset.index = scale;
					this.i = scale;
					//this.$emit("on-pa-touch-slide",scale);
				if(direction==='lr'){
					el.style.transform = "translate3d("+-(sw*scale)+"px,0,0)";
				}
				if(direction==='tb'){
					el.style.transform = "translate3d(0,"+-(sw*scale)+"px,0)";
				}
					el.style.transition = "transform .5s";
					el.dataset.moved = -(sw*scale);
				return;
			}
		}
	},
	model:{
		prop:"index",
		event:"on-pa-touch-slide"
	},
	props:{
		index:{
			type:Number,
			default:0,
			required:true,
		},
		length:{
			type:Number,
			default:0,
		},
		direction:{
			type:String,
			validator(value){
	        	return ['horizontal', 'vertical'].indexOf(value) !== -1
	     	},
	     	default:'horizontal'
		},
		slideWidth:Number,
		pagination:{
			type:Boolean,
			default:false,
		},
	},
	data(){
		return{
			i:0,
			scalewidth:0,
			lth:0,
		}
	},
	watch:{
		i(nvl){
			this.$emit("on-pa-touch-slide",nvl);
		}
	},
	mounted(){
		const dom = (this.$refs['pa-touch-slide-dom']);
		const children = dom.children;
		const childrenFirst = children[0];
		const length = children.length || 0;
		//(window.getComputedStyle(dv))//获得的大小带有px并且不包括padding
			if(this.direction==="horizontal"){
				this.scalewidth = this.slideWidth || childrenFirst.getBoundingClientRect().width;
				//console.log(dom.getBoundingClientRect().width)
			};
			if(this.direction==="vertical"){
				this.scalewidth = this.slideWidth || childrenFirst.getBoundingClientRect().height;
			};
			this.lth = this.length || length;
			const index = this.index;
			if(index!==0){
				this.$emit("on-pa-touch-slide",index);
			}
	},
}
</script>

<style lang="less">
.pa-touch-slide{
	overflow: hidden;
	position: relative;
	height: 500px;
	img{
		width: 100%;
		display: block;
	}
	>div.pa-touch-slide-lr{
		display: table;
		white-space: nowrap;
		width: 100%;
		>div{
			vertical-align: middle;
			display: inline-block;
			width: 100%;
		}
	}
	>div.pa-touch-slide-tb{
		>div{
			vertical-align: middle;
			height: 500px;
			display: block;
			overflow: hidden;
		}
	}
	>div:nth-child(2){
		position: absolute;
		bottom: 0;
		left: 0;
		text-align: center;
		width: 100%;
		height: 20px;
		line-height: 20px;
		>span{
			display: inline-block;
			width: 16px;
			height: 16px;
			border: 1px solid #fff;
			border-radius: 50%;
			margin: 0 5px;
			background: rgba(0,0,0,0.3);
			transition: width .3s;
		}
		>span.pa-touch-slide-active{
			width:32px;
			border-radius: 16px;
			transition: width .3s;
		}
	}
}
</style>