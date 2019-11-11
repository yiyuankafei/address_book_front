<template>
	<div class="search">
		<input v-model="keyword" type="text" placeholder="搜索" class="search-input">
		<div class="search-content" ref="search" v-show="keyword">
			<div>
				<div class="item" v-for="item of list" :key="item.id">
					<img :src="item.photo">
					<div class="content">{{item.nickname}}</div>
				</div>
				<div class="item center" v-show="!list.length">没有找到匹配数据</div>
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'search',
  data(){
  	return {
  		keyword:"",
  		list:[]
  	}
  },
  props:{
  	addressBooks:Object
  },
  watch:{
  	keyword(){
  		if(!this.keyword) {
  			this.list=[];
  			return;
  		}
  		const result = [];
  		for (let i in this.addressBooks) {
  			this.addressBooks[i].forEach((value)=>{
  				if(value.nickname.indexOf(this.keyword)>-1) {
  					result.push(value);
  				}
  			});
  		}
  		this.list = result;
  	}
  },
  mounted(){
  	this.scroll=new Bscroll(this.$refs.search);
  },
 }
</script>

<style lang="stylus" scoped>
	.search
		height:0.72rem
		padding:.1rem
		height:.72rem
		background:#eee
		text-aligh:center
		.search-input
			box-sizing:border-box
			width:100%
			height:.62rem
			line-height:.62rem
			text-align:center
			border-radius:.06rem
			color:#666
			padding:0 .1rem
		.search-content
			z-index:99
			overflow:hidden
			position:absolute
			top:1.74rem
			left:0
			right:0
			bottom:0
			background:#eee
			.item
				border-bottom:1px solid #ccc
				line-height:.76rem
				margin:.2rem
				img
					float:left
					width:.8rem
					height:.8rem
					border-radius:.2rem
				.content
					padding-left:1rem
					font-size:.4rem
					padding-bottom:.3rem	
			.center
				text-align:center
</style>
