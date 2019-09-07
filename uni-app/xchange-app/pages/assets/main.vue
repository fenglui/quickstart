<template>
  <view class="container">
		<view class="total">
			<text class="uni-h5 uni-text-gray">币币总资产折合 (BTC)</text>
			<view><text class="uni-h4">0.011121</text><text class="uni-h5 uni-text-gray uni-common-pl">≈365215 CNY</text></view>
		</view>
		<view class="uni-gap"></view>
		<view class="header uni-divider">
			<view class="l"><checkbox class="checkbox" value="true" checked="false" /><text class="uni-h5">隐藏小额币种</text></view>
			<view class="r"></view>
		</view>
		<view class="list">
			<view class="item uni-divider">
				<view class="title">
					<view class="n uni-h4">USDT</view>
					<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
				</view>
				<block>
					<view class="thead">
						<view class="l uni-text-gray">可用</view>
						<view class="c uni-text-gray">冻结</view>
						<view class="r uni-text-gray">折合(CNY)</view>
					</view>
					<view class="thead">
						<view class="l">5211.52</view>
						<view class="c">100.54</view>
						<view class="r">5612165.55</view>
					</view>
				</block>
			</view>
			
			<view class="item uni-divider">
				<view class="title">
					<view class="n uni-h4">BTC</view>
					<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
				</view>
				<block>
					<view class="thead">
						<view class="l uni-text-gray">可用</view>
						<view class="c uni-text-gray">冻结</view>
						<view class="r uni-text-gray">折合(CNY)</view>
					</view>
					<view class="thead">
						<view class="l">5211.52</view>
						<view class="c">100.54</view>
						<view class="r">5612165.55</view>
					</view>
				</block>
			</view>
			
			<view class="item uni-divider">
				<view class="title">
					<view class="n uni-h4">ETH</view>
					<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
				</view>
				<block>
					<view class="thead">
						<view class="l uni-text-gray">可用</view>
						<view class="c uni-text-gray">冻结</view>
						<view class="r uni-text-gray">折合(CNY)</view>
					</view>
					<view class="thead">
						<view class="l">5211.52</view>
						<view class="c">100.54</view>
						<view class="r">5612165.55</view>
					</view>
				</block>
			</view>
			
			<view class="item">
				<view class="title">
					<view class="n uni-h4">EOS</view>
					<view class="g uni-h5 uni-text-gray"><text class="uni-icon uni-icon-arrowright"></text></view>
				</view>
				<block>
					<view class="thead">
						<view class="l uni-text-gray">可用</view>
						<view class="c uni-text-gray">冻结</view>
						<view class="r uni-text-gray">折合(CNY)</view>
					</view>
					<view class="thead">
						<view class="l">5211.52</view>
						<view class="c">100.54</view>
						<view class="r">5612165.55</view>
					</view>
				</block>
			</view>
			
		</view>
  </view>
</template>
<script>
export default {
  data() {
    return {
    }
  },
	onReady() {
		uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#0952c3',
				animation: {
						duration: 400,
						timingFunc: 'easeIn'
				}
		})
	},
  mounted() {
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>
<style scoped>
	.container .total{
		padding: 20upx 20upx 0 20upx;
	}
	.container .header{
		display: flex;
		padding: 0 20upx 20upx 20upx;
	}
	.container .header .l .checkbox{
		zoom:60%;
		vertical-align: middle;
	}
	.container .list .item .title{
		display: flex;
		padding: 20upx 20upx;
	}
	.container .list .item .title .n{
		width: 50%;
		color: #0952c3;
	}
	.container .list .item .title .g{
		width: 50%;
		text-align: right;
	}
	.container .list .item .thead{
		display: flex;
		padding: 0 20upx 10upx 20upx;
	}
	.container .list .item .thead .l{
		width: 35%;
	}
	.container .list .item .thead .c{
		width: 35%;
	}
	.container .list .item .thead .r{
		width: 30%;
		text-align: right;
	}
</style>