# small-beautiful-ui [![Build Status](https://github.com/atJiangBei/hometown-ui)](https://github.com/atJiangBei/hometown-ui)

> Lightweight Vue component package

<p align="center">
  <img width="700px" src="https://raw.githubusercontent.com/vuejs/vuex/dev/docs/.vuepress/public/vuex.png">
</p>


## small-beautiful-input

```js
import { SmallBeautifulInput } from 'small-beautiful-ui'
// input type="tel" 
//regexp-->Verifying regular
//return-->Verification information returned
<small-beautiful-input 
	title="Telephone number：" 
	v-model="val2" 
	type="tel" 
	:regexp="regexp"
	:isReturn="return1" 
	placeholder="Please input"
	@change="change">
</small-beautiful-input>

// input type="id"
	ID
//maxage--->default 60
//minage--->default 18
//getAge--->A calculating function for returning age based on the incoming ID number
//regexpid--->Verifying regular
<small-beautiful-input 
	title="ID：" 
	v-model="val4" 
	type="id" 
	:regexp="regexpid"
	:isReturn="return"
	:maxage="180"
	:minage="0"
	placeholder="Please input"
	align="right"
	:warn="true"
	:getAge="getAge">
</small-beautiful-input>
//type='text'
```

## small-beautiful-toast

```js
// type --> success | warn | cancel | text 
// main.js
import {SmallBeautifulToastPlugin} from 'small-beautiful-ui'
Vue.use(SmallBeautifulToastPlugin)
	xxx.vue
	this.$beautiful.toast.show({
			type:type,
			text:"Hello World"
		})
	//or
	this.$beautiful.toast.text('Hello World')
		
//or

//type			default null		（success | warn | cancel | text ）
	
import {SmallBeautifulToast} from 'small-beautiful-ui'

<small-beautiful-toast :type="type" v-model="show">{{message}}</small-beautiful-toast>

```

## small-beautiful-loadding

```js
// icon --> loop | arrow | circle |  
App.vue
import { SmallBeautifulLoading } from 'small-beautiful-ui'

//icon	loading		default null		（loop | arrow | circle）



<small-beautiful-loading :show="show" :icon="icon">loading...</small-beautiful-loading>

<router-view/>
//Route switching
router.beforeEach(function (to, from, next) {
  store.dispatch('open')
  next()
})

router.afterEach(()=>store.dispatch('close'))
```

## small-beautiful-swiper

```js
import { SmallBeautifulSwiper } from 'small-beautiful-ui'
 
<small-beautiful-swiper 
	@on-slide="slide" 
	v-model="index"
	:loop="true"
	:auto="false"
	effect="slide"
	direction="horizontal"
	:pagination="true">
	<template slot="small-beautiful-slide-list">
		<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /> </div>
		<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /> </div>
		<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /> </div>
		<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /> </div>
	</template>
</small-beautiful-swiper>
			
//Manual switching

<small-beautiful-swiper v-model="index2" @on-slide="slide2"  direction="horizontal" :pagination="true">
	<template slot="small-beautiful-slide-list">
		<div v-for="(i,index) in 7">{{index}}</div>
	</template>
</small-beautiful-swiper>
<div class="btn">
	<span v-for="(i,index) in 7"  @click="slideTo(index)">切换到第{{index}}个</span>
</div>

js

slideTo(index){
	this.index1 = index;
}
```

## small-beautiful-select

```js
//import { SmallBeautifulSelect } from 'small-beautiful-ui'
	
<small-beautiful-select 
	:value-map="['key','value']" 
	title="ID" 
	placeholder="Please choose" 
	v-model="seval"
	direction="rtl"
	@change="schange"
	:configure="configures">
</small-beautiful-select>

data(){
	return{
		configures:[{key:1,value:"jeck"},{key:2,value:"tom"}],
		seval:"",
	}
}
```

The concrete effect is as follows:

``` 
dist/index.html
```

[github](https://github.com/atJiangBei/hometown-ui)

```
https://github.com/atJiangBei/hometown-ui

```
