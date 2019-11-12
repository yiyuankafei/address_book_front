<template>
	<div class="gallary" @click="hideClick">
		<div class="wrapper">
			<img :src="galleryImage"></img>
		</div>
	</div>
</template>

<script>
export default {
  name: 'gallery',
  methods:{
  	hideClick(){
  		this.$emit('hideGallery');
  	}
  },
  props:{
  	galleryImage:String
  }
}
</script>

<style lang="stylus" scoped>
	.gallary
		display:flex
		flex-direction:column
		justify-content:center
		z-index:999
		position:fixed
		left:0
		right:0
		top:0
		bottom:0
		background-color:#000
		.wrapper
			width:100%
			height:0
			padding-bottom:100%
			img
				width:100%
</style>
