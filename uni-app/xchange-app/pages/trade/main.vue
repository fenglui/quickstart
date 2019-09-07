<template>
	<view class="container">
		<view class="content">
			<view class="trade">
				<tradePanel ref="trade" :type="type"></tradePanel>
			</view>
			<view class="position">
				<positionList v-on:depthChange="depthChange"></positionList>
			</view>
		</view>
		<view class="uni-gap"></view>
		<entrustOrderList></entrustOrderList>
		<uni-drawer :visible="drawerVisible" mask="false" mode="left" @close="closeDrawer">
			<marketDrawer :areaList="areaList" :marketList="marketList"></marketDrawer>
		</uni-drawer>
		
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		uniDrawer
	} from '@dcloudio/uni-ui'
	import positionList from '../../components/positionList.vue'
	import entrustOrderList from '../../components/entrustOrderList.vue'
	import tradePanel from '../../components/tradePanel.vue'
	import marketDrawer from '../../components/marketDrawer.vue'
	export default {
		onReady() {
			uni.setNavigationBarTitle({
				title: "BTCUSDT"
			})
		},
		
		onShow(){
			let _this = this;
			uni.getStorage({
				key: 'market',
				success: function (res) {
					this.market = res.data;
					this.type = res.data.type;
					setTimeout(() =>{
						_this.$refs.trade.onChangeType(res.data.type)
					}, 10)
					uni.setNavigationBarTitle({
						title: this.market.symbol
					})
					uni.removeStorage({
						key: 'market',
						success: function (res) {}
					});
				}
			});
		},
		onHide() {
			this.$refs.trade.onChangeType(1)
		},
		onNavigationBarButtonTap(e) {
			
			if (e.index == 0) {
				this.drawerVisible = true;
			} else {
				uni.navigateTo({
					url: "/pages/trade/kline/main?symbol="+this.symbol
				})
			}
		},
		components: {
			uniDrawer,
			positionList,
			entrustOrderList,
			tradePanel,
			marketDrawer
		},
		data() {
			return {
				symbol: 'BTCUSDT',
				market: {},
				drawerVisible: false,
				scrollLeft: 0,
				areaList: [],
				marketList: [],
				depthValue: 1,
				type: 1
			}
		},
		mounted() {
			this.areaList = [{id:1, name:"USDT"},{id:2, name:"BTC"},{id:3, name:"ETH"},{id:4, name:"EOS"}];
			this.marketList =  [
				{"symbol":"BTCUSDT","name":"BTC","price":518072342.8400,"priceUnit":"USDT","cnyPrice":360064.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":132412,"amount":7223022.64800000,"change":51.93},
				{"symbol":"ETHUSDT","name":"ETH","price":807.2500,"priceUnit":"USDT","cnyPrice":1064.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":863446,"amount":692302221.12300000,"change":-25.43},
				{"symbol":"EOSUSDT","name":"EOS","price":63.9000,"priceUnit":"USDT","cnyPrice":988114.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":743356,"amount":834513535.87600000,"change":46.75}
			];
		},
		computed: {
		},
		methods: {
			closeDrawer() {
				this.drawerVisible = false;
			},
			depthChange(e){
				console.log("==============="+e+"==================")
			}
		}
	}
</script>

<style scoped>
	.content {
		margin-top: 20upx;
		display: flex;
	}

	.content .trade {
		width: 60%;
		padding-left: 20upx;
		padding-right: 20upx;
	}

	.content .position {
		width: 40%;
	}
</style>
