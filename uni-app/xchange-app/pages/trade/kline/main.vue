<template>
  <view class="container">
    <web-view :src="url" @message="receiveMsg"></web-view>
  </view>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	onReady() {
		uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#000000',
				animation: {
						duration: 400,
						timingFunc: 'easeIn'
				}
		})
		
	},
  onLoad(option) {
	  this.url = 'hybrid/html/index.html?symbol='+option.symbol;
	  uni.setNavigationBarTitle({
			title: option.symbol
		});
	  this.symbol = option.symbol;
  	console.log("option:"+option.symbol)
  },
  data() {
  	return {
  		symbol: ' ',
		url: ''
  	}
  },
  components: {
    
  },
  computed: {
    
  },
  methods: {
    receiveMsg(e){
			uni.setStorage({
				key: 'market',
				data: e.detail.data[0],
				success: function () {
					uni.switchTab({
						url:"/pages/trade/main"
					})
				}
			});
		}
  }
}
</script>

<style scoped>
.container{
	background: #000000;
}
</style>
