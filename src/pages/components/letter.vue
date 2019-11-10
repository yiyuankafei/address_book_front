<template>
	<div>
		<ul class="list">
			<li class="item" v-for="(item,key) of letters"  :key="item" :ref="item"
				@click="clickLetter"
				@touchstart="clickStart"
				@touchmove="clickMove"
				@touchend="clickEnd">{{item}}</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'letter',
  data(){
  	return{
  		touchStatus:false,
  		startY:0,
  		timer:null
  	}
  },
  props:['addressBooks'],
  computed:{
  	letters(){
  		const letters = [];
  		for (let i in this.addressBooks) {
  			letters.push(i);
  		}
  		return letters;
  	}
  },
  methods:{
  	clickLetter(e){
  		this.$emit('changeLetter', e.target.innerText);
  	},
  	clickStart(){
  		this.touchStatus=true;
  	},
  	clickMove(e){
  		if (this.timer) {
  			clearTimeout(this.timer);
  		}
		this.timer=setTimeout(()=>{
			if (this.touchStatus) {
				const touchY = e.touches[0].clientY-79;
		  		const index = Math.floor((touchY - this.startY)/20);
		  		if (index > 0 && index < this.letters.length) {
		  			this.$emit('changeLetter', this.letters[index]);
		  		}
			}
		},50);
  	},
  	clickEnd(){
  		this.touchStatus=false;
  	}
  },
  updated(){
  	this.startY = this.$refs['B'][0].offsetTop;
  }
}
</script>

<style lang="stylus" scoped>
	.list
		display:flex
		flex-direction:column
		justify-content:center
		position:absolute
		top:1.58rem
		right:0
		bottom:0
		width:.4rem
		.item
			line-height:.4rem
			text-aligh:center
</style>
