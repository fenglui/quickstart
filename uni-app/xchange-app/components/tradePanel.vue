<template>
	<view class="trade-inner">
		<view class="tab">
			<view class="buy uni-bg-up" :class="type == 2 ? 'normal' : ''" @click="onChangeType(1)">买入</view>
			<view class="sell uni-bg-down " :class="type == 1 ? 'normal' : ''" @click="onChangeType(2)">卖出</view>
			<view class="parallelogram"></view>
		</view>
		<view v-show="type == 1">
			<view class="price-input uni-thinner-border">
				<input class="uni-input " type="digit" placeholder="" value="521.052" />
				<view class="opt uni-thinner-left-border">
					<view class="button">-</view>
					<view class="button">+</view>
				</view>
			</view>
			<view class="uni-h7 uni-text-gray">≈28767.23 CNY</view>
			<view class="num-input uni-thinner-border">
				<input class="uni-input" type="digit" placeholder="数量" />
				<view class="opt"></view>
			</view>
			<view class="uni-h7 uni-text-gray">可用 28767.23BTC</view>
			<slider value="0" min="0" max="100" show-value />
			<view class="uni-h5">交易额 125.02555 USDT</view>
			<button class="btn uni-bg-up">买入</button>
		</view>
		
		<view v-show="type == 2">
			<view class="price-input uni-thinner-border">
				<input class="uni-input " type="digit" placeholder="" value="521.052" />
				<view class="opt uni-thinner-left-border">
					<view class="button">-</view>
					<view class="button">+</view>
				</view>
			</view>
			<view class="uni-h7 uni-text-gray">≈28767.23 CNY</view>
			<view class="num-input uni-thinner-border">
				<input class="uni-input" type="digit" placeholder="数量" />
				<view class="opt"></view>
			</view>
			<view class="uni-h7 uni-text-gray">可用 28767.23BTC</view>
			<slider value="0" min="0" max="100" show-value />
			<view class="uni-h5">交易额 125.02555 USDT</view>
			<button class="btn uni-bg-down">卖出</button>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => {
					return []
				}
			},
			type: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				
			}
		},
		computed: {
			list_() {
				return this.list;
			},
			type_(){
				console.log("type:"+this.type)
				return this.type;
			}
		},
		methods: {
			onClick(e) {
				console.log("=====================================")
			},
			onChangeType(e){
				this.type = e;
			}
		}
	}
</script>

<style>
	.trade-inner .tab {
		position: relative;
		display: flex;
		text-align: center;
	}

	.trade-inner .tab .buy {
		color: #ffffff;
		font-weight: bold;
		width: 50%;
		height: 70upx;
		line-height: 70upx;
	}

	.trade-inner .tab .sell {
		color: #ffffff;
		font-weight: bold;
		width: 50%;
		height: 70upx;
		line-height: 70upx;
	}

	.trade-inner .tab .normal {
		background: #ECECF6;
		color: #555555;
		font-weight: bold;
	}

	.trade-inner .tab .parallelogram {
		position: absolute;
		left: calc(50% - 19upx);
		top: 0;
		transform: translate(-50%, -50%);
		width: 36upx;
		height: 74upx;
		background: #ffffff;
		-webkit-transform: skew(-30deg);
		-moz-transform: skew(-30deg);
		-o-transform: skew(-30deg);
		transform: skew(-30deg);
	}

	.trade-inner .price-input {
		position: relative;
		margin-top: 30upx;
	}

	.trade-inner .price-input input {
		position: relative;
		padding-right: 180upx;
	}

	.trade-inner .price-input .opt {
		display: flex;
		position: absolute;
		top: 2upx;
		right: 0;
		width: 180upx;
		height: 78upx;
		line-height: 78upx;
	}

	.trade-inner .num-input {
		position: relative;
		margin-top: 30upx;
	}

	.trade-inner .price-input .opt .button {
		border: 0;
		background: #fff;
		width: 80upx;
		height: 78upx;
		line-height: 78upx;
		text-align: center;
		font-size: 48upx;
		font-weight: 400;
	}

	.trade-inner .btn {
		height: 74upx;
		line-height: 74upx;
		color: #fff;
		font-size: 28upx;
		font-weight: bold;
		margin-top: 30upx;
	}
</style>


<!-- <template>
	<block>
		<view class="tab">
			{{title}}
			<view class="buy uni-bg-up" :class="tabIndex == 1 ? 'normal' : ''">买入aa{{tabIndex}}</view>
			<view class="sell uni-bg-down" :class="tabIndex == 0 ? 'normal' : ''">卖出</view>
			<view class="parallelogram"></view>
		</view>
		<block>
			<view class="price-input uni-thinner-border">
				<input class="uni-input " type="digit" placeholder="" value="521.052" />
				<view class="opt uni-thinner-left-border">
					<view class="button">-</view>
					<view class="button">+</view>
				</view>
			</view>
			<view class="uni-h7 uni-text-gray">≈28767.23 CNY</view>
			<view class="num-input uni-thinner-border">
				<input class="uni-input" type="digit" placeholder="数量" />
				<view class="opt"></view>
			</view>
			<view class="uni-h7 uni-text-gray">可用 28767.23BTC</view>
			<slider value="0" min="0" max="100" show-value />
			<view class="uni-h5">交易额 125.02555 USDT</view>
			<button class="btn uni-bg-up">买入</button>
		</block>
	</block>
</template>

<script>
	export default {
		data: function () {
		  return {
			tabIndex: 0
		  }
		},
		props:{
			bannerList:{
				type: Array,
				default: function(){
					return [];
				}
			}
		},
		computed: {

		},
		methods: {
			buy:function(obj){
				console.log("=========================================")
			}
		}
	}
</script>

<style>
	.tab {
		position: relative;
		display: flex;
		text-align: center;
	}

	.tab .buy {
		color: #ffffff;
		font-weight: bold;
		width: 50%;
		height: 70upx;
		line-height: 70upx;
	}

	.tab .sell {
		color: #ffffff;
		font-weight: bold;
		width: 50%;
		height: 70upx;
		line-height: 70upx;
	}

	.tab .normal {
		background: #ECECF6;
		color: #555555;
		font-weight: bold;
	}

	.tab .parallelogram {
		position: absolute;
		left: calc(50% - 19upx);
		top: 0;
		transform: translate(-50%, -50%);
		width: 36upx;
		height: 74upx;
		background: #ffffff;
		-webkit-transform: skew(-30deg);
		-moz-transform: skew(-30deg);
		-o-transform: skew(-30deg);
		transform: skew(-30deg);
	}

	.price-input {
		position: relative;
		margin-top: 30upx;
	}

	.price-input input {
		position: relative;
		padding-right: 180upx;
	}

	.price-input .opt {
		display: flex;
		position: absolute;
		top: 2upx;
		right: 0;
		width: 180upx;
		height: 78upx;
		line-height: 78upx;
	}

	.num-input {
		position: relative;
		margin-top: 30upx;
	}

	.price-input .opt .button {
		border: 0;
		background: #fff;
		width: 80upx;
		height: 78upx;
		line-height: 78upx;
		text-align: center;
		font-size: 48upx;
		font-weight: 400;
	}

	.btn {
		height: 74upx;
		line-height: 74upx;
		color: #fff;
		font-size: 28upx;
		font-weight: bold;
		margin-top: 30upx;
	}
</style>
 -->
