<template>
	<div class="add">
		<div class="header">
			<router-link tag="div" to="/addressBook" class="iconfont back-icon">&#xe667;</router-link> 
		</div>
		<div class="image">
			<div class="imageInfo">
				<img src="http://www.open1111.com:80/image/default.jpg"/>
			</div>
			<div class="imageAction">
				<button>修改头像</button>
				<input type="file" name="file" accept="image/png,image/gif,image/jpeg,image/jpg"></input>
			</div>
		</div>
		<div class="userInfo">
			<div class="item">
				<span>姓名</span>
				<input type="text"></input>
			</div>
			<div class="item">
				<span>手机号码</span>
				<input type="text"></input>
			</div>
			<div class="item">
				<span>座机电话号码</span>
				<input type="text"></input>
			</div>
			<div class="item">
				<span>工作单位地址</span>
				<textarea></textarea>
			</div>
			<div class="item">
				<span>家庭地址</span>
				<textarea></textarea>
			</div>
			<div class="item">
				<span>备注</span>
				<textarea></textarea>
			</div>
		</div>
		<div class="action">
			<div class="item">
				<a href="">保存</a>
			</div> 
		</div>
	</div>
</template>

<script>
export default {
  name: 'add'
}
</script>

<style lang="stylus" scoped>
	.add
		.header
			position:fixed
			top:0
			overflow:hidden
			height:.86rem
			line-height:.86rem
			text-align:left
			padding-left:.2rem
			padding-top:.1rem
			background-color:#eee
			width:100%
			z-index:10
			opacity:.8
		.image
			margin-top:.86rem
			text-align:center
			width:90%
			height:2.5rem
			.imageInfo
				img
					float:left
					overflow:hidden
					border-radius:.5rem
					padding:.3rem
					width:2rem
					height:2rem
			.imageAction
				padding-top:1.55rem
				text-align:left
				button
					background-color:#4caf50
					border:none
					color:#fff
					padding:.15rem
					text-align:center
					text-decoration:none
					display:inline-block
					font-size:16px
					border-radius:.2rem
				input
					display:none
		.userInfo
			padding-left:.3rem
			padding-top:0
			.item
				padding-top:.3rem
				padding-bottom:.1rem
				border-bottom:1px solid #ccc
				span
					display:block
					font-weight:700
				input
					padding-top:.1rem
					width:100%
				textarea
					padding-top:.1rem
					width:100%
		.action
			padding-top:.5rem
			padding-bottom:2rem
			.item
				width:100%
				text-align:center
				padding-top:.3rem
				padding-bottom:.3rem
				a
					font-size:.4rem
					color:#576b97
					
				
</style>
