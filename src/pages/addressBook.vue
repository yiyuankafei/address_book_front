<template>
	<div>
		电话簿主页
	</div>
</template>

<script>
	import axios from 'axios'
	import {getServerUrl} from '@/config/sys.js'
	
	export default {
		name:"addressBook",
		methods:{
			getAddressBooks(){
				let url = getServerUrl("/addressBook/get");
				let token = window.localStorage.getItem('token');
				axios.defaults.headers.common['token']=token;
				axios.get(url)
					.then(response=>{
						console.log(response);
					}).catch(error=>{
						console.log(error);
					})
			}
		},
		mounted(){
			this.getAddressBooks();
		}
	}
</script>

<style lang="stylus" scoped>
</style>
