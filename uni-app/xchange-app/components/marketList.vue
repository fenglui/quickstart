<template>
	<block>
		<view class="rank">
			<view class="item thead">
				<view class="n uni-h7">名称</view>
				<view class="p uni-h7">最新价</view>
				<view class="t uni-h7">涨跌幅</view>
			</view>
			<view v-for="(item, index) in list_" :key="index" class="item uni-divider" @click="onClick(item)">
				<view class="n">{{item.name}}</view>
				<view class="p">{{item.price}}</view>
				<view class="t"><label class="" :class="item.change > 0 ? 'light uni-bg-up' : 'light uni-bg-down' ">+40.2%</label></view>
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
