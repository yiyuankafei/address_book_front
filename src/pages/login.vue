<template>
	<div>
		<div class="login-logo">通讯录</div>
		<form action="" class="login-content">
			<ul>
				<li>
					<input v-model="username" type="text" placeholder="请输入用户名"/>
				</li>
				<li>
					<input v-model="password" type="password" placeholder="请输入密码"/>
				</li>
			</ul>
			<a href="javascript:" class="submit-button" @click="submit">登录</a>
			<p class="error-info">{{errorInfo}}</p>
		</form>
		<p class="copyright">
			Copyright@2019-11-09<a data-v-ae440714="" href="www.yiyuankafei.com">www.yiyuankafei.com</a>
		</p>
	</div>
</template>

<script>
import axios from 'axios'
import {getServerUrl} from '@/config/sys.js'
export default {
  name: 'login',
  data(){
  	return {
  		username:"",
  		password:"",
  		errorInfo:""
  	}
  },
  methods:{
  	submit(){
  		let url = getServerUrl("/user/login");
  		if(this.username.trim()=='') {
  			this.errorInfo="用户名不能为空";
  			return;
  		}
  		if(this.password.trim()=='') {
  			this.errorInfo="密码不能为空";
  			return;
  		}
  		axios.post(url, {"username":this.username,"password":this.password})
  			.then(response=>{
  				console.log(response);
  				if(response.data.code==200) {
  					window.localStorage.setItem("token", response.data.msg);
  					this.$router.replace('/addressBook');
  				} else {
  					this.errorInfo=response.data.msg;
  				}
  			}).catch(error=>{
  				this.errorInfo=error;
  			})
  	}
  }
 }
</script>

<!-- 
	npm install stylus --save
	npm install stylus-loader --save
	
	npm install axios
	
	stylus是CSS预处理，顾名思义，预先处理CSS
	stylus給CSS添加了可编程的特性，也就是说，在stylus中可以使用变量、函数、判断、循环等一系列CSS沒有的东西来编写CSS
	执行一些列操作后，这个文件可以编译成CSS

 -->
<style lang="stylus" scoped>
	.login-logo
		width:3rem
		height:3rem
		background:#10a78e
		margin:1rem auto .5rem
		color:#fff
		line-height:3rem
		font-size:.8rem
		border-radius:50%
		overflow:hidden
		text-align:center
	
	.login-content
		margin:1rem .8rem
		line-height:.4rem
		li
			border-bottom:1px solid #ccc
			height:1rem
			padding:.3rem 0 0
			position:relative
			overflow:hidden
			input
				border:none
				line-height:.8rem
				width:100%
				outline:0
	.submit-button
		background:#10a78e
		color:#fff
		border-radius:1rem
		height:1rem
		line-height:1rem
		font-size:.6rem
		margin-top:1rem
		padding:0
		text-align:center
		display:block
	.error-info
		color:red
		padding-top:.3rem
	.copyright
		position:absolute
		padding-top:0
		padding-left:1rem
		fontsize:.3rem
			
</style>
