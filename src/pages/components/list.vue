<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="addressBook" v-for="(item,key) of addressBooks" :key="key" :ref="key">
				<div class="title">{{key}}</div>
				<router-link tag="div" :to="`/detail/${innerItem.id}`" class="item" v-for="innerItem of item" :key="innerItem.id">
					<img :src="innerItem.photo">
					<div class="content">{{innerItem.nickname}}</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'list',
  props:['addressBooks','letter'],
  mounted(){
  	this.scroll=new Bscroll(this.$refs.wrapper,{click:true});
  },
  watch:{
  	letter(){
  		if (this.letter) {
  			const element = this.$refs[this.letter][0];
  			this.scroll.scrollToElement(element);
  		}
  	}
  }
}
</script>

<style lang="stylus" scoped>
	.list
		position:absolute
		top:1.58rem
		left:0
		bottom:0
		right:0
		.title
			line-height:.54rem
			background:#eee
			padding-left:.2rem
			color:#666
			font-size:.26rem
		.item
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
				border-bottom:1px solid #ccc
</style>
