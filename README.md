# small-beautiful-ui [![Build Status](https://circleci.com/gh/vuejs/vuex/tree/dev.png?style=shield)](https://circleci.com/gh/vuejs/vuex)

> Lightweight Vue component package

<p align="center">
  <img width="700px" src="https://raw.githubusercontent.com/vuejs/vuex/dev/docs/.vuepress/public/vuex.png">
</p>


## small-beautiful-input

```js
import { SmallBeautifulInput } from 'small-beautiful-ui'
// input type="tel" 
		//regexp-->传入的验证正则表达式
		//return-->返回的验证信息（object）
			<small-beautiful-input title="电话号码：" 
									v-model="val2" 
									type="tel" 
									:regexp="regexp"
									:isReturn="return1" 
									placeholder="请输入电话号码"
									@change="change">
			</small-beautiful-input>

// input type="id"
	身份证号验证
	//maxage--->最大年龄（默认60）
	//minage--->最大年龄（默认18）
	//getAge--->一个函数，传入身份证号码返回年龄（默认有，可自传，自己定义规则）
	//regexpid--->验证的正则
			<small-beautiful-input title="身份证号：" 
									v-model="val4" 
									type="id" 
									:regexp="regexpid"
									:isReturn="return"
									:maxage="180"
									:minage="0"
									placeholder="请输入身份证号"
									align="right"
									:warn="true"
									:getAge="getAge"
									>
			</small-beautiful-input>
	//type='text'
```

## small-beautiful-toast

```js
// type --> success | warn | cancel | text 
	全局调用
	  main.js
		import {SmallBeautifulToastPlugin} from 'small-beautiful-ui'
		Vue.use(SmallBeautifulToastPlugin)
	xxx.vue
		this.$beautiful.toast.show({
				type:type,
				text:"出来吧我的小伙"
			})
		或者
			this.$beautiful.toast.text('出来吧我的小伙伴')
			
	局部调用		
		type	弹窗样式			默认为空（常规样式）		可选值（success | warn | cancel | text ）
		
		import {SmallBeautifulToast} from 'small-beautiful-ui'
	
		<small-beautiful-toast :type="type" v-model="show">{{message}}</small-beautiful-toast>

```

## small-beautiful-loadding

```js
// icon --> loop | arrow | circle |  
	App.vue
	import { SmallBeautifulLoading } from 'small-beautiful-ui'
	
	icon	loading样式			默认为空（常规样式）		可选值（loop | arrow | circle）
	
	
	
	<small-beautiful-loading :show="show" :icon="icon">加载中</small-beautiful-loading>
	
	<router-view/>
	路由切换
		router.beforeEach(function (to, from, next) {
			  store.dispatch('open')
			  next()
			})

		router.afterEach(()=>store.dispatch('close'))
```

## small-beautiful-swiper

```js
		import { SmallBeautifulSwiper } from 'small-beautiful-ui'
		
		direction	左右方向或者上下方向（horizontal | vertical）  默认值 horizontal
		on-slide	滑动触发的函数	返回值为下标
		index		下标  v-model绑定	设定初始位置				默认值0
		pagination	是否显示指示图标		默认值  true
		
	<small-beautiful-swiper v-model="index" @on-slide="slideChange" direction="horizontal" :pagination="true">
				<template slot="small-beautiful-slide-list">
					<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /> </div>
				</template>
			</small-beautiful-swiper>
			
	//点击按钮切换位置
	
	<h5>手动切换的文字型左右轮播</h5>
	<small-beautiful-swiper v-model="index1" direction="horizontal" :pagination="true">
		<template slot="small-beautiful-slide-list">
			<div v-for="i in 7">{{i}}</div>
		</template>
	</small-beautiful-swiper>
	
	<div class="btn">
		<span v-for="(i,index) in 7"  @click="slide(index)">切换到第{{index}}个</span>
	</div>
	
	js
		slide(index){
			this.index1 = index;
		}
```

## small-beautiful-select

```js
	import { SmallBeautifulSelect } from 'small-beautiful-ui'
	
	<small-beautiful-select 
		:value-map="['key','value']" 
		title="身份证号" 
		placeholder="请选择" 
		v-model="seval"
		direction="rtl"
		@change="schange"
		:configure="configures">
	</small-beautiful-select>
	
	data(){
		return{
			configures:[{key:1,value:"大黄"},{key:2,value:"小黑"}],
			seval:"",
		}
	}
```

The concrete effect is as follows:

``` 
dist/index.html
```

githup

```
https://github.com/atJiangBei/hometown-ui

```
