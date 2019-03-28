<template>
<div class="flower-select"> 
	<div class="flower-select-label">
		<label for="">{{title}}</label>
		<slot name="icon"></slot>
	</div>
	<div class="flower-select-content">
		<p :class="{'flower-select-content-prtl':direction==='rtl','flower-select-content-pltr':direction==='ltr','flower-select-content-placeholder':placeholderFlag}">
			{{thisValue}}
			<i class="flower-select-content-clear" @click="selectClear" v-if="thisValue!==placeholder"></i>
		</p>
		<select v-model="defaultValue" 
				@change="selectChange"
			:class="{'flower-select-content-srtl':direction==='rtl','flower-select-content-sltr':direction==='ltr'}">
			<option disabled selected>{{placeholder}}</option>
			<template v-for="item in configure">
				<option :value="item[valueMap[0]]">{{item[valueMap[1]]}}</option>
			</template>
		</select>
		
	</div>
</div>
</template>

<script>
export default{
	model:{
		prop:"valueSelect",
		event:"flower-select-change"
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
	data(){
		return{
			thisValue:"",//value
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
			this.thisValue = this.placeholder;
			this.defaultValue = this.valueSelect;
			this.configure.forEach((item,index)=>{
				if(value==item[keyName]){
					this.thisValue = item[valueName];
					this.placeholderFlag = true;
				}
			})
		},
		selectChange(){
			const value = event.target.value;
			const keyName = this.valueMap[0];
			const valueName = this.valueMap[1];
			if(value==this.placeholder)return;
			this.configure.forEach((item,index)=>{
				if(value==item[keyName]){
					this.thisValue = item[valueName];
				}
			})
			this.placeholderFlag = true;
			this.$emit("flower-select-change",value);
			
		},
		selectClear(){
			this.placeholderFlag = false;
			this.thisValue = this.placeholder;
			this.$emit("flower-select-change","");
			this.defaultValue = "";
		}
	}
}
</script>

<style lang="less">
.flower-select{
	display: flex;
	align-items: center;
	padding: 30px;
	line-height: 42px;
	font-size: 28px;
	border-top:1px solid #ccc;
	border-bottom: 1px solid #ccc;
	color:inherit;
}
.flower-select-label{
	width: 150px;
	text-align: left;
	display: flex;
	>label{
		flex:1;
	}
}
.flower-select-content{
	flex:1;
	display: flex;
	position: relative;
	align-items: center;
	p{
		flex:1;
		text-align: left;
		color: #757575;
		position: relative;
		padding-right: 20px;
	}
	p.flower-select-content-prtl{
		text-align: right;
	}
	p.flower-select-content-pltr{
		text-align: left;
	}
	p.flower-select-content-placeholder{
		color: inherit;
	}
	p::after{
		content: "";
		position: absolute;
		right: 0;
		border-top:1px solid #757575;
		border-right:1px solid #757575;
		width: 18px;
		height: 18px;
		top: 50%;
		margin-top: -9px;
		transform: rotate(45deg);
	}
	select{
		flex:1;
		position: absolute;
		left: 0;
		top: 0;
		border: none;
		outline: none;
		width: 100%;
		opacity: 0;
		direction:rtl;
		height: 100%;
	}
	select.flower-select-content-srtl{
		direction:rtl;
	}
	select.flower-select-content-sltr{
		direction:ltr;
	}
	i.flower-select-content-clear{
		width: 28px;
		height: 28px;
		position: relative;
		display: inline-block;
		z-index: 1;
		border-radius: 50%;
		background:#fbfbfb url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAByUlEQVRIS61W0VHDMBTTmwC6AUxAmYC6C9ARygSwAe0GdAIYoV0gbjcoE9ANgAkeJ58TEvs5CUd9ly87kq2nJ1swMLz3lwDuAVwlS08Ads65rz4IKU1672cAHgEsBvawBbB2zh2tdRlB3PEzgKeh0yXzL5Goc6IOQQT3AKZ/BK+X8xSuLVtDcAZwk6RNwCNS83OMjXMuSBwIYkEpTWeo6jvdIyIXFquqfgM4iciNMU+p9jUBnUArNoPg8/l86r2fquo+JSG4iMzonqqqjgYJLbyQqP2nsQO64ZoFS0na4PH/DwDsl3RMSLAE8FoQvnFFTRJ0jTsfYYwHEqwA0Pel0SHhIsoyApxL1yQY456Ov0eCk2AziqCteXSdWXhDgkDQK5FRUEqUFb6gb5CoWGQDvO6VEAclC7fIQpFpr8ymBfA6ozJ3FZpxEhqtqio20l1yzKNz7ranoA1Jb6P1RQUAgvCisZqIv7IZefFY6fsbFZEki4ue3hiaCjERmrJeSSli5ljBNQTYybDY6eHiyS6c/5AwINvgGUGUinq/pek64gg7AMv0EdB76avqynBXh0tVDyKyYvZbmygStGsTXxZ0U/10oXP4bYeeLT9rPCQQBU3zLgAAAABJRU5ErkJggg==) no-repeat center;
		background-size:100% ;
		margin-left: 5px;
		vertical-align: -3.2px;
	}
}
</style>