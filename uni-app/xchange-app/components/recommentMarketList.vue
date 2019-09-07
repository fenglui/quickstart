<template>
	<block>
		<view class="uni-grid-9">
			<view v-for="(item, index) in list_" :key="index" class="uni-grid-9-item no-border-right recomment" @click="onClick(item)">
				<label class="uni-h7 uni-bold">{{item.symbol}}</label>
				<label :class="item.change > 0 ? 'uni-h4 uni-up' : 'uni-h4 uni-down' ">{{item.price}}</label>
				<label :class="item.change > 0 ? 'uni-h7 uni-up' : 'uni-h7 uni-down' ">{{item.change > 0 ? "+" : ""}}{{item.change}}%</label>
				<label class="uni-h7">≈{{item.cnyPrice}}CNY</label>
			</view>
		</view>
	</block>
</template>


<script>
	export default {
		data() {
			return {
			};
		},
		props:{
			list: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		computed: {
			list_(){
				return this.list;
			}
		},
		methods: {
			onClick(e) {
				uni.navigateTo({
					url: "/pages/trade/kline/main?symbol="+e.symbol
				})
			}
		}
	}
</script>

<style scoped>
	.recomment .symbol{
		line-height: 40px;
	}
	.recomment .price{
		line-height: 30px;
	}
	.recomment .float{
		line-height: 30px;
	}
	.recomment .cny{
		line-height: 30px;
	}
</style>
