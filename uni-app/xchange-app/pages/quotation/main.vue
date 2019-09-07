<template>
  <view class="container">
		<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
		 :activeColor="activeColor"></uni-segmented-control>
		<marketList :list="marketList"></marketList>	
  </view>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {uniSegmentedControl} from '@dcloudio/uni-ui'

import marketList from '../../components/marketList.vue'

export default {
	data() {
        return {
			items: [
				'自选',
				'USDT'
			],
			current: 0,
			activeColor: '#007aff',
			styleType: 'button',
			marketList: []
		}
    },
  mounted() {
    this.marketList =  [
    	{"symbol":"BTCUSDT","name":"BTC","price":51807.8400,"priceUnit":"USDT","cnyPrice":360064.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":132412,"amount":7223022.64800000,"change":51.93},
    	{"symbol":"ETHUSDT","name":"ETH","price":807.2500,"priceUnit":"USDT","cnyPrice":1064.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":863446,"amount":692302221.12300000,"change":-25.43},
    	{"symbol":"EOSUSDT","name":"EOS","price":63.9000,"priceUnit":"USDT","cnyPrice":988114.91,"coinCnyPrice":6.95,"high":35.51000000,"low":35.51000000,"volume":743356,"amount":834513535.87600000,"change":46.75}
    ];
  },
  components: {
	  uniSegmentedControl,
	  marketList
  },
  computed: {
    
  },
  methods: {
    onClickItem(index) {
    	if (this.current !== index) {
    		this.current = index;
    	}
    }
  }
}
</script>

<style scoped>
	.tab-bar{
		display: flex;
		margin: 20upx 20upx;
		border: 2upx solid #cfcfcf;
		border-radius: 10upx;
	}
	.tab-bar .tab-bar-item{
		text-align: center;
		height: 70upx;
		line-height: 70upx;
	}
	.tab-bar .active{
		background: #1478ca;
		color: #ffffff;
	}
	.rank{
		padding: 10px 0px;
	}
	.rank .title{
		padding: 10px 20px;
	}
	.rank .item{
		display: flex;
		padding: 20px 20px;
	}
	.rank .item .n{
		width: 35%;
	}
	.rank .item .p{
		width: 35%;
	}
	.rank .item .t{
		width: 30%;
		text-align: right;
	}
	.rank .item .t .light{
		display: block;
		width: 150px;
		color: #ffffff;
		text-align: center;
		float: right;
		border-radius: 4upx;
	}
</style>
