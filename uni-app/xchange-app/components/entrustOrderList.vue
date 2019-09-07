<template>
	<view class="order">
		<view class="title uni-divider"><text class="uni-h5 uni-bold">当前委托</text></view>
		<view class="item uni-divider">
			<view class="opt">
				<text class="uni-h4 uni-bold uni-up">买入</text><text class="uni-h6 uni-text-gray uni-common-pl">10:53 04/03</text>
				<button class="cancel">撤消</button>
			</view>
			<view class="thead">
				<view class="th price">价格(USDT)</view>
				<view class="th num">数量(ETH)</view>
				<view class="th turnover">实际成交(ETH)</view>
			</view>
			<view class="tbody">
				<view class="td price">5515.5</view>
				<view class="td num">1000</view>
				<view class="td turnover">500</view>
			</view>
		</view>
		
		<view class="item uni-divider">
			<view class="opt">
				<text class="uni-h4 uni-bold uni-up">买入</text><text class="uni-h6 uni-text-gray uni-common-pl">10:53 04/03</text>
				<button class="cancel">撤消</button>
			</view>
			<view class="thead">
				<view class="th price">价格(USDT)</view>
				<view class="th num">数量(ETH)</view>
				<view class="th turnover">实际成交(ETH)</view>
			</view>
			<view class="tbody">
				<view class="td price">5515.5</view>
				<view class="td num">1000</view>
				<view class="td turnover">500</view>
			</view>
		</view>
	</view>
  
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    
  }
}
</script>

<style scoped>
  .order .title{
  	padding: 0 20upx 20upx 20upx;
  }
  .order .item{
	padding: 20upx 20upx 20upx 20upx;  
  }
  .order .item .opt{
	  position: relative;
	display: flex;
	align-items: baseline;
  }
  .order .item .opt .cancel{
	  position: absolute;
	  top: 0;
	  right: 0;
  	width: 80upx;
	height: 50upx;
	line-height: 50upx;
	font-size: 24upx;
	padding: 0;
  }
  .order .item .thead{
	  display: flex;
	  color: #8e9fa7;
  }
  .order .item .price{
	width: 35%;
  }
  .order .item .num{
  	  width: 35%;
  }
  .order .item .turnover{
  	  width: 30%;
	  text-align: right;
  }
  .order .item .tbody{
  	  display: flex;
  }
</style>
