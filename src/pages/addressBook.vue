<template>
	<div>
		<address-book-header></address-book-header>
		<address-book-search :addressBooks="addressBooks"></address-book-search>
		<address-book-list :addressBooks="addressBooks" :letter="letter"></address-book-list>
		<address-book-letter :addressBooks="addressBooks" @changeLetter="clickLetter"></address-book-letter>
	</div>
</template>

<script>
	import axios from 'axios'
	import {getServerUrl} from '@/config/sys.js'
	import AddressBookHeader from '@/pages/components/header'
	import AddressBookSearch from '@/pages/components/search'
	import AddressBookList from '@/pages/components/list'
	import AddressBookLetter from '@/pages/components/letter'
	export default {
		name:"addressBook",
		components:{
			AddressBookHeader,
			AddressBookSearch,
			AddressBookList,
			AddressBookLetter
		},
		data(){
			return {
				addressBooks:{},
				letter:''
			}
		},
		methods:{
			getAddressBooks(){
				let url = getServerUrl("/contacts");
				let token = window.localStorage.getItem('token');
				axios.defaults.headers.common['token']=token;
				axios.get(url)
					.then(response=>{
						console.log(response);
						this.addressBooks=response.data;
						console.log(response);
					}).catch(error=>{
						console.log(error);
					})
			},
			refreshToken(){
				let url = getServerUrl("/user/refreshToken");
				let token = window.localStorage.getItem('token');
				axios.defaults.headers.common['token']=token;
				axios.get(url)
					.then(response=>{
						console.log("token刷新,旧token:" +token);
						console.log("token刷新,新token:" + response.data.msg);
						window.localStorage.setItem("token", response.data.msg);
					}).catch(error=>{
						console.log(error);
					})
			},
			clickLetter(letter){
				this.letter=letter;
			}
		},
		mounted(){
			setInterval(this.refreshToken, 1000 * 60 * 3);
			this.getAddressBooks();
		}
	}
</script>

<style lang="stylus" scoped>
</style>
