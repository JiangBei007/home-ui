<template>
<div class="pa-select"> 
	<div class="pa-select-label">
		<label for="">{{title}}</label>
		<slot name="icon"></slot>
	</div>
	<div class="pa-select-content">
		<select v-model="defaultValue" 
				@change="selectChange"
			:class="{'pa-select-content-srtl':direction==='rtl','pa-select-content-sltr':direction==='ltr'}">
			<option disabled selected value="">{{placeholder}}</option>
			<template v-for="item in configure">
				<option :value="item[valueMap[0]]">{{item[valueMap[1]]}}</option>
			</template>
		</select>
		<i class="pa-select-content-clear" @click="selectClear" v-if="defaultValue"></i>
	</div>
</div>
</template>

<script>
export default{
	model:{
		prop:"valueSelect",
		event:"pa-select-change"
	},
	props:{
		valueSelect:"",
		placeholder:"",
		title:{
			type:String,
			default:""
		},
		configure:{
			type:Array,
		},
		direction:{
			type:String,
			validator(value){
		        return ["rtl","ltr"].indexOf(value)!==-1
		     },
		    default:"rtl"
		},
		valueMap:{
			type:Array,
			validator(value){
				let arr = ["string","number"]
		        return arr.indexOf(typeof(value[0]))!==-1&&arr.indexOf(typeof(value[1]))!==-1
		     },
		     default:['key','value']
		}
	},
	watch:{
		valueSelect(nvl){
			this.defaultValue = nvl;
		}
	},
	data(){
		return{
			defaultValue:"",//key
			placeholderFlag:false,
		}
	},
	created(){
		this.Init()
	},
	methods:{
		Init(){
			const value = this.valueSelect;
			const keyName = this.valueMap[0];
			const valueName = this.valueMap[1];
			this.defaultValue = this.valueSelect;
			this.configure.forEach((item,index)=>{
				if(value==item[keyName]){
					this.placeholderFlag = true;
				}
			})
		},
		selectChange(){
			const value = event.target.value;
			const keyName = this.valueMap[0];
			const valueName = this.valueMap[1];
			if(value==this.placeholder)return;
			this.placeholderFlag = true;
			this.$emit("pa-select-change",value);
			this.defaultValue = value;
		},
		selectClear(){
			this.placeholderFlag = false;
			this.$emit("pa-select-change","");
			this.defaultValue = "";
		}
	}
}
</script>

<style lang="less">
.pa-select{
	display: flex;
	align-items: center;
	padding-top: 30px;
	padding-bottom: 30px;
	color:inherit;
	background: #fff;
}
.pa-select-label{
	width: 150px;
	text-align: left;
	display: flex;
	>label{
		line-height: 42px;
		min-height: 42px;
		font-size: 28px;
		display: block;
		flex:1;
	}
}
.pa-select-content{
	flex:1;
	display: flex;
	position: relative;
	align-items: center;
	padding-right: 28px;
	select{
		flex:1;
		display:block;
		width: 100%;
		direction:rtl;
		height:42px;
		font-size: 28px;
		line-height:normal;
		-webkit-appearance: none;
		background: transparent;
		position: relative;
	}
	select.pa-select-content-srtl{
		direction:rtl;
	}
	select.pa-select-content-sltr{
		direction:ltr;
	}
	i.pa-select-content-clear{
		width: 28px;
		height: 28px;
		position: relative;
		display: block;
		z-index: 1;
		border-radius: 50%;
		background:#fbfbfb url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAByUlEQVRIS61W0VHDMBTTmwC6AUxAmYC6C9ARygSwAe0GdAIYoV0gbjcoE9ANgAkeJ58TEvs5CUd9ly87kq2nJ1swMLz3lwDuAVwlS08Ads65rz4IKU1672cAHgEsBvawBbB2zh2tdRlB3PEzgKeh0yXzL5Goc6IOQQT3AKZ/BK+X8xSuLVtDcAZwk6RNwCNS83OMjXMuSBwIYkEpTWeo6jvdIyIXFquqfgM4iciNMU+p9jUBnUArNoPg8/l86r2fquo+JSG4iMzonqqqjgYJLbyQqP2nsQO64ZoFS0na4PH/DwDsl3RMSLAE8FoQvnFFTRJ0jTsfYYwHEqwA0Pel0SHhIsoyApxL1yQY456Ov0eCk2AziqCteXSdWXhDgkDQK5FRUEqUFb6gb5CoWGQDvO6VEAclC7fIQpFpr8ymBfA6ozJ3FZpxEhqtqio20l1yzKNz7ranoA1Jb6P1RQUAgvCisZqIv7IZefFY6fsbFZEki4ue3hiaCjERmrJeSSli5ljBNQTYybDY6eHiyS6c/5AwINvgGUGUinq/pek64gg7AMv0EdB76avqynBXh0tVDyKyYvZbmygStGsTXxZ0U/10oXP4bYeeLT9rPCQQBU3zLgAAAABJRU5ErkJggg==) no-repeat 0 0;
		background-size:100% ;
		margin-left: 5px;
	}
}
.pa-select-content::after{
		content: "";
		position: absolute;
		right: 0;
		width: 28px;
		height: 28px;
		top: 50%;
		margin-top: -14px;
		background: url(../static/icon/drop-down-right.png) no-repeat 0 0;
		background-size: 100%;
}
</style>