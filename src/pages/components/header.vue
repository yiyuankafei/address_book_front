<template>
	<div class="header">
		通讯录
		<router-link tag="div" to="/add" class="iconfont add-icon">&#xe81b;</router-link>
	</div>
</template>

<script>
export default {
  name: 'header'
  }
</script>

<style lang="stylus" scoped>
	.header
		position:relative
		overflow:hidden
		height:0.86rem
		line-height:.86rem
		background:#eee
		font-size:.35rem
		font-weight:700
		text-align:center
		.add-icon
			position:fixed
			right:.45rem
			top:0
</style>
